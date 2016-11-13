import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Store from '$common/store';
import Routes from '$common/routers';
import '../../views/index.html';

const history = syncHistoryWithStore(process.env.NODE_ENV === 'production' ? browserHistory : hashHistory, Store);

ReactDom.render((
  <Provider store={Store}>
    <Routes history={history} />
  </Provider>
), document.getElementById('root'));
