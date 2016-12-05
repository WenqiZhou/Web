import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BannerAnim, { Element, Arrow } from 'rc-banner-anim';
import classnames from 'classnames';
import './index.less';

export class NavItem extends Component {
  render() {
    return (
      <div
        className={classnames({
          'nav-item': true,
          selected: this.props.selected
        })}>
        {this.props.children}
      </div>
    );
  }
}
NavItem.propTypes = {
  children: PropTypes.node
};

@connect()
export class NavBar extends Component {
  render() {
    return (
      <nav>
        <NavItem>首页</NavItem>
      </nav>
    )
  }
}

export class Banner extends Component {
  render() {
    return (
      <BannerAnim autoPlay type="across">
        <Element
          key="1"
          prefixCls="banner-element"
          style={{
            backgroundImage: "url('http://hbfile.b0.upaiyun.com/img/home/banner/7e6d8731a88b59eab2db04c5db563ebf13c250e0b9133')"
          }} />
        <Element
          key="2"
          prefixCls="banner-element"
          style={{
            backgroundImage: "url('http://hbfile.b0.upaiyun.com/img/home/banner/4fd18b478ed3ec20d80f2e416cd669b7d38077c1c6c26')"
          }} />
        <Arrow arrowType="prev" key="prev" prefixCls="banner-arrow">
          <div className="icon prev" />
        </Arrow>
        <Arrow arrowType="next" key="next" prefixCls="banner-arrow">
          <div className="icon next" />
        </Arrow>
      </BannerAnim>
    )
  }
}

export class Header extends Component {
  render() {
    return (
      <header>
        <Banner />
        <NavBar />
      </header>
    )
  }
}
