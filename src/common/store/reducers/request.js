import { handleActions } from 'redux-actions';
import Types from '../types';

const currentRequests = {};

const request = handleActions({
  [Types.REQUEST_START](state, { key }) {
    currentRequests[key] = true;
    return {
      ...state, loading: true
    }
  },
  [Types.REQUEST_FINISH](state, { key, data, error }) {
    delete currentRequests[key];
    return {
      ...state,
      loading: Object.keys(currentRequests).length !== 0,
      [key]: { data, error }
    }
  },
  [Types.REQUEST_ERROR](state, { key, data, error }) {
    delete currentRequests[key];
    return {
      ...state,
      loading: Object.keys(currentRequests).length !== 0,
      [key]: { data, error }
    }
  },
  [Types.REQUEST_CLEAN](state, { key }) {
    return {
      ...state,
      loading: false,
      [key]: {}
    }
  }
}, {
  loading: false
});

export default request;
