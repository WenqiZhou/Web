import React, { Component, PropTypes } from 'react';
import { InlineMenu } from '11-panel';

const menuList = {
  not_commented: '待评价',
  commented: '已评价'
};

const Menu = ({ current, host }) => (
  <InlineMenu list={menuList} current={current} host={host} prefix="comments" />
);

export default Menu;
