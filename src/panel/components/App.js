// 根组件,维护菜单以及导航栏等
import React, { Component, cloneElement } from 'react';
import classnames from 'classnames';
import { Menu, Banner } from '11-panel';
import { Nav } from '11-desktop';
import Style from '../style/index.less';

console.log(Style)

export default class App extends Component {
  render() {
    return (
      <div className={Style.dashboard}>
        <div className={Style.dashboard.nav}>
          <Nav search className={classnames(Nav.Style.index, 'dashboard')} />
        </div>
        <Banner />
        <div>
          <Menu />
          {this.props.children}
        </div>
      </div>
    )
  }
}
