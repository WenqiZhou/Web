import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { hashHistory } from 'react-router';
import { routerReducer as routing, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import SagaManager from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers({
  ...reducers, routing
}), {}, compose(
  applyMiddleware(sagaMiddleware, routerMiddleware(hashHistory)),
  window.devToolsExtension ? window.devToolsExtension() : f => f // 调用redux-devtools-extension
));

SagaManager.startSagas(sagaMiddleware);

export default store;
