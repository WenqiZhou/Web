/* eslint import/no-unresolved: 0 */
const React = require('react');
const { renderToString } = require('react-dom/server');
const { createStore, compose, applyMiddleware, combineReducers } = require('redux');
const { Provider } = require('react-redux');
const { routerReducer, routerMiddleware } = require('react-router-redux');
const { createMemoryHistory, match, RouterContext } = require('react-router');
const { createLocation } = require('history');
const sagas = require('redux-saga');
const rootReducer = require('../../dist/server/reducers');
const createRoutes = require('../../dist/server/routers');
const render = require('../libs/render');

module.exports.render = async(ctx, next) => {
  const history = createMemoryHistory();
  const routes = createRoutes(history);
  const location = createLocation(ctx.request.url);
  const sagaMiddleware = sagas.default();

  return new Promise((recept, reject) => {
    match({ routes, location }, (error, redirectLocation, renderProps) => {
      if (error) {
        recept({
          status: 500,
          error
        });
        return;
      }

      if (!renderProps) {
        recept({
          status: 404
        });
        return;
      }

      const store = createStore(combineReducers({
        ...rootReducer, routerReducer
      }), {}, compose(applyMiddleware(sagaMiddleware)));

      const initialView = renderToString(
        <div>
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        </div>
      );

      recept({
        status: 200,
        data: render(initialView, store.getState())
      });
      return;
    });
  })
};
