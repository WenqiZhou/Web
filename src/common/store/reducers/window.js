import { handleActions } from 'redux-actions';
import Types from '../types';

const window = handleActions({
  [Types.WINDOW_TITLE](state, { title }) {
    if (title) {
      if (document.title) {
        document.title = title;
      }
      return { ...state, title };
    }
    return state;
  },
  [Types.WINDOW_SIDEBAR](state) {
    return { ...state, sidebar: !state.sidebar }
  },
  [Types.WINDOW_CUSTOMER_ROUTE](state, { path }) {
    return { ...state, path };
  },
  [Types.WINDOW_CUSTOMER_ROUTE_CLEAR](state) {
    return { ...state, path: null };
  }
}, {
  title: require('../../../../config/config.json').appname,
  sidebar: false
});

export default window;
