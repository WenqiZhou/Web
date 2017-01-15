/* eslint no-underscore-dangle: 0 */
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { hashHistory, browserHistory } from 'react-router';
import { routerReducer as routing, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import SagaManager from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers({
  ...reducers, routing
}), typeof window === 'object' ? window.__INITIAL_STATE__ || {} : {}, compose(
  applyMiddleware(sagaMiddleware, routerMiddleware(process.env.NODE_ENV === 'production' || process.env.history === 'browserHistory' ? browserHistory : hashHistory)),
  typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : f => f // 调用redux-devtools-extension
));

SagaManager.startSagas(sagaMiddleware);

export default store;
