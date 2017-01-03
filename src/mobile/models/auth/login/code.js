import React, { Component, PropTypes } from 'react';
import { Input, Form, Varify, Toast } from '11-common';

export default class MobileCodeLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sendCount: 0,
      mobile: null
    }
  }

  onCountFinish = () => {
    this.setState({
      sendCount: this.state.sendCount++
    });
  };

  handleSendVarify = (result, error) => {
    if (!result) {
      Toast(error);
    } else {
      Toast('验证码发送成功');
    }
  };

  sendCode = () => {
  };

  handleMobileChanged = (e, callback) => {
    const value = e.target.value;
    this.setState({
      mobile: e.target.value
    });
    callback(value);
  };

  render() {
    const { setRef } = this.props;
    return (
      <div>
        <Form
          ref={setRef}
        >
          <Input icon="mobile global" readOnly value="中国 +86" />
          <Input icon="mobile phone" maxLength={11} onChange={this.handleMobileChanged} clearable type="text" key="mobile" placeholder="请输入手机号" />
          <Input
            icon="mobile code"
            maxLength={4}
            action={(
              <Varify
                mobile={this.state.mobile}
                onSend={this.handleSendVarify}
                getMobile={() => this.state.mobile}
                onCountFinish={this.onCountFinish}
                emitCallback={(func) => {
                  this.sendCode = func
                }}
              >
                <a />
              </Varify>
            )}
            clearable
            type="tel"
            key="code"
            placeholder="请输入验证码" />
        </Form>
        <p className="help left">
          {this.state.sendCount > 0 ? <a onClick={this.sendCode(2)}>收不到验证码？试试语音验证码</a> : '　'}
        </p>
      </div>
    );
  }
}
