import React, { Component, PropTypes } from 'react';
import { InlineMenu } from '11-panel';

const menuList = {
  '/': '全部订单',
  paid: '已支付',
  not_paid: '待支付',
  not_confirmed: '待确认',
  finished: '已完成',
  canceled: '已取消',
  deleted: '回收站'
};

const Menu = ({ current, host }) => (
  <InlineMenu list={menuList} current={current} host={host} prefix="orders" />
);

export default Menu;
