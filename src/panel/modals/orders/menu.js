import React, { Component, PropTypes } from 'react';
import { InlineMenu } from '11-panel';
import { redirect } from '11-utils';

const menuList = {
  '/': '全部订单',
  paid: '已支付',
  not_paid: '待支付',
  not_confirmed: '待确认',
  finished: '已完成',
  canceled: '已取消',
  deleted: '回收站'
};

export default class Menu extends Component {
  static propTypes = {
    current: PropTypes.string,
    host: PropTypes.bool
  };

  handleClick = (key) => () => {
    if (key === this.props.current) return;
    redirect.go(`/dashboard${this.props.host ? '/host' : ''}/orders${key === '/' ? '' : `/${key}`}`);
  };

  render() {
    return (
      <InlineMenu>
        {
          Object.keys(menuList).map((key) => (
            <InlineMenu.Item onClick={this.handleClick(key)} current={this.props.current === key} key={key}>{menuList[key]}</InlineMenu.Item>
          ))
        }
      </InlineMenu>
    )
  }
}
