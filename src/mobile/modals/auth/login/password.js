import React, { Component } from 'react';
import calssnames from 'classnames';
import { Input } from '11-common';
import { go } from '../../../../common/libs/utils/utils';
import Form from '../../../../common/components/Form';

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
      <a onClick={() => go('/m/auth/forget')}>忘记密码？</a>
    </p>
  </div>
);

export default MobilePasswordLogin;
