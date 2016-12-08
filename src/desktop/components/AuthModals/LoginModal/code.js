import React, { Component } from 'react';
import Form from '../../../../common/components/Form';
import Code from '../../../../common/components/Code';
import Input, { Group } from '../../../../common/components/Input';

export default class LoginModalCodeLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: null
    }
  }

  handleMobileChange = (e, callback) => {
    const value = e.target.value;
    this.setState({
      mobile: value
    });
    callback(value);
  };

  render() {
    return (
      <Form setRef={this.props.setRef} className="desktop form">
        <Group>
          <Input style={{ width: 88 }} type="text" key="countrycode" value="+86" readOnly />
          <Input onChange={this.handleMobileChange} className="flex" style={{ width: 284 }} type="tel" maxLength={11} key="user" placeholder="手机号" />
        </Group>
        <Input
          key=""
          action={(
            <img src="" alt="验证码" />
          )}
        />
        <Input
          maxLength={4}
          action={(
            <Code
              mobile={this.state.mobile}
              onSend={this.handleSendVarify}
              onCountFinish={this.onCountFinish}
              emitCallback={(func) => {
                this.sendCode = func
              }}
            >
              <button />
            </Code>
          )}
          clearable
          type="tel"
          key="code"
          placeholder="请输入验证码" />
      </Form>
    )
  }
}