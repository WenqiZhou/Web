import React, { Component } from 'react';
import MobileIndex from '$mobile/modals/index';
import DesktopIndex from '$desktop/modals/index';
import { EventType } from '../../../../libs/enums';

export default class Index extends Component {
  // // 由于使用通用的数据接口,因此在入口文件中刷新数据
  // componentDidMount() {
  //   request({
  //     key: HOMEPAGE
  //   });
  // }

  render() {
    return (
      <div>
        <DesktopIndex />
        <MobileIndex />
      </div>
    )
  }
}
