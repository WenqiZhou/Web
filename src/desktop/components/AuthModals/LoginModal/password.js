import React, { Component } from 'react';
import { Input } from '11-common';
import Form from '../../../../common/components/Form';

const LoginModalPasswordLogin = ({ setRef, errorTime }) => (
  <Form setRef={setRef} className="desktop form">
    <Input type="text" key="user" placeholder="手机号/邮箱" />
    <Input type="password" key="password" placeholder="密码" />
    {
      errorTime > 0 ? <Input hidden type="varify" key="varify" placeholder="图片识别码" /> : <span />
    }
  </Form>
);

export default LoginModalPasswordLogin;
