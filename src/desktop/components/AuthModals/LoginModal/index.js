import React, { Component } from 'react';
import ReactDom from 'react-dom';
import classnames from 'classnames';
import Modal from '../../Modal';
import Form from '../../../../common/components/Form';
import Input from '../../../../common/components/Input';
import ThirdLogin from '../../../../common/components/ThirdLogin';
import './index.less';

class LoginModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 'password'
    };
  }

  toggleLogin = (target) => () => {
    if (target === this.state.current) {
      return;
    }
    this.setState({
      current: target,
      errorTime: 0
    });
  };

  render() {
    return (
      <Modal className="login double" onClose={this.props.destroy}>
        <div className="content">
          <div className="toggle buttons">
            <button onClick={this.toggleLogin('password')} className={classnames({ current: this.state.current === 'password' })}>登录</button>
            <button onClick={this.toggleLogin('code')} className={classnames({ current: this.state.current === 'code' })}>手机动态码登录</button>
          </div>
          <Form className="desktop form">
            <Input type="text" key="user" placeholder="手机号/邮箱" />
            <Input type="password" key="password" placeholder="密码" />
            {
              this.state.errorTime > 0 ? <Input hidden type="varify" key="varify" placeholder="图片识别码" /> : <span />
            }
          </Form>
          <p className="helper" style={{ padding: '15px 0' }}>
            未注册的手机将自动创建依依账号
          </p>
          <button>登录</button>
          <div className="actions">
            <input type="checkbox" /><label>一周内免登陆</label>
            <span className="right"><a>忘记密码？</a></span>
          </div>
        </div>
        <div className="content">
          <div className="title">
            其他方式登录
          </div>
          <ThirdLogin redirect="/" />

          <p className="helper">
            <a>没有帐号？<span>新用户注册</span></a>
          </p>
        </div>
      </Modal>
    )
  }
}

const initial = () => {
  const div = window.document.createElement('div');
  window.document.body.appendChild(div);

  const destroy = () => {
    ReactDom.unmountComponentAtNode(div);
  };

  const loginModal = (props) => {
    ReactDom.render(<LoginModal {...props} destroy={destroy} />, div);
  };

  return {
    destroy,
    loginModal
  }
};

export default initial();
