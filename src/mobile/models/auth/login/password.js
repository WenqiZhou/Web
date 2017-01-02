import React, { Component } from 'react';
import calssnames from 'classnames';
import { Input, Form } from '11-common';
import { redirect } from '11-utils';

const MobilePasswordLogin = ({ setRef }) => (
  <div>
    <Form
      ref={setRef}
    >
      <Input icon="mobile global" readOnly value="中国 +86" />
      <Input icon="mobile account" clearable type="text" key="mobile" placeholder="请输入邮箱／手机号" />
      <Input icon="mobile password" clearable type="password" key="password" placeholder="请输入密码" />
    </Form>
    <p className="help">
      <a onClick={() => redirect.go('/m/auth/forget')}>忘记密码？</a>
    </p>
  </div>
);

export default MobilePasswordLogin;
