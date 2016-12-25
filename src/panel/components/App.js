// 根组件,维护菜单以及导航栏等
import React, { Component, cloneElement } from 'react';
import classnames from 'classnames';
import { Menu, Banner } from '11-panel';
import { Nav } from '11-desktop';
import Footer from './Footer';
import Style from '../style/index.less';

export default class App extends Component {
  render() {
    return (
      <div className="dashboard lg-only">
        <Nav search black className={classnames(Nav.Style.index, 'dashboard')} />
        <Banner />
        <div className="container flex">
          <Menu />
          <main>
            {
              this.props.children
            }
          </main>
        </div>
        <Footer />
      </div>
    )
  }
}
