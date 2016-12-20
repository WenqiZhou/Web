// 根组件,维护菜单以及导航栏等
import React, { Component, cloneElement } from 'react';
import { Menu } from '11-panel';
import { Nav } from '11-desktop';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div>
          <Menu />
          {this.props.children}
        </div>
      </div>
    )
  }
}
