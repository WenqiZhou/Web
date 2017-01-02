import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, IndexRedirect } from 'react-router';
import App from '$common/components/App';
import { dispatch } from '11-store';
import { WINDOW_CUSTOMER_ROUTE_CLEAR } from '11-store/types';
import PanelRoutes from '../../panel/routers';

// customerProps提供了一个方法,如果组件中调用了setPath自定义路由路径,必须在Route中加上这个方法清除路径
const customerProps = {
  onLeave: () => {
    dispatch({
      type: WINDOW_CUSTOMER_ROUTE_CLEAR
    });
  }
};

const Routes = ({ history, ...props }) => (
  <Router history={history} {...customerProps}>
    <Route path="/" component={App}>
      <IndexRoute components={require('../models/index/index')} />
      <Route path="/s">
        <IndexRoute component={require('../models/search')} />
      </Route>
      <Route path="/house/:id" component={require('../models/house_detail')} />
      {/*由于移动端使用弹窗的方式,所以不需要路由,PC端检测如果是移动端进入页面,跳转到移动端详情页*/}
      <Route path="/book/:id" component={require('../models/house_detail')} />
      <Route path="/activity/:id" component={require('../models/activity')} />
    </Route>
    <Route path="/m/auth" component={require('../../mobile/models/auth')}>
      <IndexRedirect to="login" />
      <Route path="login" component={require('../../mobile/models/auth/login')}>
        <IndexRedirect to="password" />
        <Router path="password" component={require('../../mobile/models/auth/login/password')} />
        <Router path="code" />
      </Route>
      <Route path="signup" component={require('../../mobile/models/auth/signup')} />
      <Route path="forget" component={require('../../mobile/models/auth/forget')} />
    </Route>
    <Route path="/help">
      <Route path="cb">
        <Route path=":id" component={() => <span>退订政策</span>} />
      </Route>
    </Route>
    {PanelRoutes}
    <Route path="*" component={require('../models/error/404')} />
  </Router>
);

export default Routes;
