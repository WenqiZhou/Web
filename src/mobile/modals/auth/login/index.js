import React, { Component, createElement } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { redirect, go, setTitle } from '../../../../common/libs/utils/utils';
import { toast } from '../../../components/Toast';
import MobilePasswordLogin from './password';
import MobileCodeLogin from './code';
import ThirdLogin from '../../../../common/components/ThirdLogin';
import './index.less';

@connect((props, { location }) => {
  return {
    path: location.pathname.match(/password/) ? 'password' : 'code'
  };
})
export default class MobileAuthLogin extends Component {
  componentDidMount() {
    setTitle('登录');
  }

  setRef = (element) => {
    this.form = element;
  };

  handleLogin = () => {
    const { getValues } = this.form;
    console.log(getValues());
  };

  form = null;

  goRegister = () => {
    go('/m/auth/signup')
  };

  redirect = (path) => () => {
    if (path === this.props.path) return;
    redirect(`/m/auth/login/${path}`)
  };

  render() {
    return (
      <div>
        <div className="logo" />
        <div className="login wrapper">
          <div className="toggle buttons">
            <button
              onClick={this.redirect('password')}
              className={classnames({
                current: this.props.path === 'password'
              })}>
              普通登录
            </button>
            <button
              onClick={this.redirect('code')}
              className={classnames({
                current: this.props.path === 'code'
              })}>
              动态密码登录
            </button>
          </div>
          {
            createElement(this.props.path !== 'code' ? MobilePasswordLogin : MobileCodeLogin, {
              setRef: this.setRef
            })
          }
          <button className="login" onClick={this.handleLogin}>
            登录
          </button>
          <button className="register ghost" onClick={this.goRegister}>
            立即注册
          </button>
          <ThirdLogin redirect="/" mobile />
        </div>
      </div>
    )
  }
}
