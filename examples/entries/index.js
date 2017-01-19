import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../components/App';
import Contents from '../src';
import '../views/index.html';

const Context = App.Context(Contents);

const routeConfig = {
  path: '/',
  component: App,
  indexRoute: { component: Context },
  childRoutes: Object.keys(Contents).map((key) => {
    return {
      path: key,
      component: Contents[key].base,
      indexRoute: Contents[key].index ? { component: Contents[key].index } : undefined,
      childRoutes: Object.keys(Contents[key]).map((k) => {
        return {
          path: k,
          component: Contents[key][k]
        }
      })
    }
  })
};

ReactDom.render(<Router history={hashHistory} routes={routeConfig} />, window.document.getElementById('root'));
