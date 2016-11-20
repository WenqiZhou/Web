/* eslint import/prefer-default-export: 0 */

import Store from '../index';
import { SEARCH_TRACE_ID } from '../types';

export const SEARCH = {
  method: 'GET',
  path: '//house/search',
  headers: {
    'User-Uin': {
      source: 'User-Uin',
      default: '100000'
    },
    'Client-Token': {
      source: 'User-Uin',
      default: null
    }
  },
  callback: (response) => {
    Store.dispatch({
      type: SEARCH_TRACE_ID,
      traceID: response.search_trace_id,
      lastID: response.last_id
    });

    return response;
  }
};
