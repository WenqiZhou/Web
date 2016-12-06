import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { redirect } from '../../../../common/libs/utils/utils';
import Form from '../../../components/Form';
import Input from '../../../components/Input';
import { toast } from '../../../components/Toast';

@connect((props, { location }) => {
  return {
    path: location.pathname.match(/password/) ? 'password' : 'code'
  };
})
export default class MobileAuthLogin extends Component {
  redirect = (path) => () => {
    redirect(`/m/auth/login/${path}`)
  };

  form = null;

  handleLogin = () => {
    const { getValues } = this.form;
    console.log(getValues());
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
          <Form
            ref={e => {
              this.form = e
            }}
            className="form"
          >
            <Input icon="mobile global" readOnly value="中国 +86" />
            <Input icon="mobile account" clearable type="text" key="mobile" placeholder="请输入邮箱／手机号" />
            <Input icon="mobile password" clearable type="password" key="password" placeholder="请输入密码" />
          </Form>
        </div>
      </div>
    )
  }
}
