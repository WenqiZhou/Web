import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { redirect } from '11-utils';
import Search from './search';
import Style from './index.less';
import { loginModal } from '../Signup';

const NavItems = {
  //'/': {
  //  name: '首页'
  //},
  //download: {
  //  name: '下载app'
  //},
  //news: {
  //  name: '新闻'
  //},
  //signup: {
  //  name: '注册'
  //},
  //login: {
  //  name: '登录',
  //  action: () => {
  //    loginModal();
  //  }
  //}
};

const NavItemsLogined = {};

export default class Navigation extends Component {
  static Style = Style;

  static propTypes = {
    className: PropTypes.string,
    fixed: PropTypes.bool,
    search: PropTypes.bool,
    current: PropTypes.string,
    black: PropTypes.bool
  };

  handleClick = (key) => () => {
    const action = NavItems[key].action;
    if (typeof action === 'function') {
      action();
    } else {
      redirect.go(key);
    }
  };

  goIndex = () => {
    redirect.go('/');
  };

  render() {
    return (
      <nav
        className={classnames({
          [Style.navigation]: true,
          fixed: this.props.fixed,
          search: this.props.search,
          [Style.black]: this.props.black,
          [this.props.className]: true
        })}
      >
        <div
          onClick={this.goIndex}
          className={classnames({
          [Style.icon]: true,
          [Style.logo]: true,
          'icon logo': true,
          white: !this.props.black
        })}
        />
        {
          this.props.search && false ? <Search /> : ''
        }
        <ul className={classnames(Style.right, Style.list)}>
          {
            Object.keys(NavItems).map((key, index) => (
              <li
                key={index}
                onClick={this.handleClick(key)}
                className={classnames({
                  item: true,
                  [Style.current]: this.props.current ? this.props.current === key : index === 0
                })}
              >
                {NavItems[key].name}
              </li>
            ))
          }
          <li style={{ display: "none" }} className={Style.button}>
            <button className="ghost">免费成为房东</button>
          </li>
          <li style={{  }} className={Style.button}>
            客服电话:400-636-9633
          </li>
        </ul>
      </nav>
    )
  }
}
