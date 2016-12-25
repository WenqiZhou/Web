// 根组件,维护菜单以及导航栏等
import React, { Component, cloneElement } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Menu, Banner } from '11-panel';
import { Nav } from '11-desktop';
import Footer from './Footer';
import Style from '../style/index.less';

@connect(({ window }, { location }) => {
  return {
    path: window.path || location.pathname
  };
})
export default class App extends Component {
  render() {
    const host = !!this.props.path.match(/^\/dashboard\/host/);

    return (
      <div className="dashboard lg-only">
        <Nav host search black className={classnames(Nav.Style.index, 'dashboard')} />
        <Banner />
        <div className="container flex">
          <Menu host={host} path={this.props.path} />
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
