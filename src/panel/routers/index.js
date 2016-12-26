import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, IndexRedirect } from 'react-router';
import App from '$common/components/App';
import { dispatch } from '11-store';
import { WINDOW_CUSTOMER_ROUTE_CLEAR } from '$common/store/types';
import { Menu } from '11-panel';
import Routers from './routers';

// customerProps提供了一个方法,如果组件中调用了setPath自定义路由路径,必须在Route中加上这个方法清除路径
const customerProps = {
  onLeave: () => {
    dispatch({
      type: WINDOW_CUSTOMER_ROUTE_CLEAR
    });
  }
};
const Routes = (
  <Route path="/dashboard" component={require('../components/App')}>
    <IndexRedirect to="orders" />
    {Routers.orders}
    {Routers.order}
    {Routers.comments}
    <Route path="host">
      {Routers.orders}
      {Routers.order}
      {Routers.comments}
      <IndexRoute component={require('../modals/host_index')} />
    </Route>
  </Route>
);

export default Routes;
