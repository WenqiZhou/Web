import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Search from './search';
import './index.less';

const NavItems = {
  '/': '首页',
  download: '下载app',
  news: '新闻',
  signup: '注册',
  login: '登录'
};

const NavItemsLogined = {};

export default class Navigation extends Component {
  static propTypes = {
    className: PropTypes.string,
    fixed: PropTypes.bool,
    search: PropTypes.bool,
    current: PropTypes.string
  };

  render() {
    return (
      <nav
        className={classnames({
          navigation: true,
          fixed: this.props.fixed,
          search: this.props.search,
          [this.props.className]: true
        })}
      >
        <div className="icon logo white" />
        {
          this.props.search ? <Search /> : ''
        }
        <ul className="right list">
          {
            Object.keys(NavItems).map((key, index) => (
              <li
                key={index}
                className={classnames({
                  item: true,
                  current: this.props.current ? this.props.current === key : index === 0
                })}
              >
                {NavItems[key]}
              </li>
            ))
          }
          <li>
            <button className="ghost">免费成为房东</button>
          </li>
        </ul>
      </nav>
    )
  }
}
