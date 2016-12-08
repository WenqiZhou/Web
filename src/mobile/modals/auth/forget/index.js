import React, { Component } from 'react';
import { redirect, go, setTitle } from '../../../../common/libs/utils/utils';
import { toast } from '../../../components/Toast';
import Form from '../../../../common/components/Form';
import Input from '../../../../common/components/Input';
import Code from '../../../../common/components/Code';
import '../signup/index.less';

export default class MobileSignupIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sendCount: 0,
      mobile: null
    }
  }

  componentDidMount() {
    setTitle('修改密码');
  }

  onCountFinish = () => {
    this.setState({
      sendCount: this.state.sendCount++
    });
  };

  setRef = (ref) => {
    this.form = ref;
  };

  form = null;

  sendCode = () => {
  };

  handleSendVarify = (result, error) => {
    if (!result) {
      toast(error);
    } else {
      toast('验证码发送成功');
    }
  };

  handleMobileChanged = (e, callback) => {
    const value = e.target.value;
    this.setState({
      mobile: e.target.value
    });
    callback(value);
  };

  render() {
    return (
      <div>
        <div className="register wrapper">
          <Form ref={this.setRef}>
            <Input icon="mobile global" readOnly value="中国 +86" />
            <Input icon="mobile phone" onChange={this.handleMobileChanged} clearable type="tel" maxLength={11} key="mobile" placeholder="请输入正确的手机号" />
            <Input
              icon="mobile code"
              maxLength={4}
              action={(
                <Code
                  mobile={this.state.mobile}
                  onSend={this.handleSendVarify}
                  getMobile={() => this.state.mobile}
                  onCountFinish={this.onCountFinish}
                  emitCallback={(func) => {
                    this.sendCode = func
                  }}
                >
                  <a />
                </Code>
              )}
              clearable
              type="tel"
              key="code"
              placeholder="请输入验证码" />
            <Input icon="mobile password" clearable type="password" key="password" placeholder="请输入新密码" />
          </Form>
          <p className="help left">
            {this.state.sendCount > 0 ? <a onClick={this.sendCode(2)}>收不到验证码？试试语音验证码</a> : '　'}
          </p>
          <button className="register">
            重置密码
          </button>
        </div>
      </div>
    )
  }
}