// 订单详情的路由
import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, IndexRedirect } from 'react-router';
import { dispatch } from '11-store';
import { WINDOW_CUSTOMER_ROUTE_CLEAR } from '11-store/types';

// customerProps提供了一个方法,如果组件中调用了setPath自定义路由路径,必须在Route中加上这个方法清除路径
const customerProps = {
  onLeave: () => {
    dispatch({
      type: WINDOW_CUSTOMER_ROUTE_CLEAR
    });
  }
};

const Routes = (
  <Route path="orders" component={require('../models/orders')}>
    <IndexRoute component={require('../models/orders')} />
    <Route path=":type" component={require('../models/orders')} />
  </Route>
);

export default Routes;
