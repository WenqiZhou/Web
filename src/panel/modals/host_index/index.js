// 房东端首页
import React, { Component } from 'react';
import { Card, UserInfo } from '11-panel';
import Style from './index.less';

const { UserInfo: Info } = require('../../../../libs/mock');

export default class HostIndex extends Component {
  render() {
    return (
      <div>
        <UserInfo data={Info.user} />
      </div>
    )
  }
}
