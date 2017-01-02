import React, { Component } from 'react';
import { Input, Toast, Form, Code } from '11-common';
import { redirect, setTitle } from '11-utils';
import './index.less';

export default class MobileSignupIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sendCount: 0,
      mobile: null
    }
  }

  componentDidMount() {
    setTitle('注册');
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
      Toast(error);
    } else {
      Toast('验证码发送成功');
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
            <Input icon="mobile password" clearable type="password" key="password" placeholder="请输入密码" />
          </Form>
          <p className="help left">
            {this.state.sendCount > 0 ? <a onClick={this.sendCode(2)}>收不到验证码？试试语音验证码</a> : '　'}
          </p>
          <button className="register">
            注册并完成登录
          </button>
          <p className="help center license">
            注册即表示我同意依依短租的<span>隐私保护</span>、<span>版权声明</span>、<br />
            <span>《服务协议》</span>
          </p>
          <p className="help center ad">
            注册账号送330元民宿现金券。使用现金券订房，一单最高<br />
            可省330元，马上用起来吧。
          </p>
        </div>
      </div>
    )
  }
}
