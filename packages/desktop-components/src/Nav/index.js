import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Search from './search';
import Style from './index.less';

const NavItems = {
  '/': '首页',
  download: '下载app',
  news: '新闻',
  signup: '注册',
  login: '登录'
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
        <div className={classnames({
          [Style.icon]: true,
          [Style.logo]: true,
          'icon logo': true,
          white: !this.props.black
        })} />
        {
          this.props.search ? <Search /> : ''
        }
        <ul className={classnames(Style.right, Style.list)}>
          {
            Object.keys(NavItems).map((key, index) => (
              <li
                key={index}
                className={classnames({
                  item: true,
                  [Style.current]: this.props.current ? this.props.current === key : index === 0
                })}
              >
                {NavItems[key]}
              </li>
            ))
          }
          <li className={Style.button}>
            <button className="ghost">免费成为房东</button>
          </li>
        </ul>
      </nav>
    )
  }
}
