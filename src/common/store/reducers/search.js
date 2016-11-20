import { handleActions } from 'redux-actions';
import Types from '../types';
import Store from '../index';

const window = handleActions({
  [Types.SEARCH_TRACE_ID](state, { traceID, lastID } = Store.getState().search) {
    return { ...state, traceID, lastID };
  }
}, {
  traceID: null,
  lastID: null
});

export default window;
