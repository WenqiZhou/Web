// 根组件,维护菜单以及导航栏等
import React, { Component, cloneElement } from 'react';
import { Menu } from '11-panel';

export default class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        {this.props.children}
      </div>
    )
  }
}
