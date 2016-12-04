import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, IndexRedirect } from 'react-router';
import App from '$common/components/App';
import { dispatch } from '$common/store';
import { WINDOW_CUSTOMER_ROUTE_CLEAR } from '$common/store/types';

// customerProps提供了一个方法,如果组件中调用了setPath自定义路由路径,必须在Route中加上这个方法清除路径
const customerProps = {
  onLeave: () => {
    dispatch({
      type: WINDOW_CUSTOMER_ROUTE_CLEAR
    });
  }
};

const Routes = ({ history }) => (
  <Router history={history} {...customerProps}>
    <Route path="/" component={App}>
      <IndexRoute components={require('../models/index/index')} />
      <Route path="/s">
        <IndexRoute component={require('../models/search')} />
      </Route>
      <Route path="/house/:id" component={require('../models/house_detail')} />
    </Route>
    <Route path="/help">
      <Route path="cb">
        <Route path=":id" component={() => <span>退订政策</span>} />
      </Route>
    </Route>
    <Route path="*" component={require('../models/error/404')} />
  </Router>
);

export default Routes;
