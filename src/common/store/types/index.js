const Types = [
  'LOGIN_START',
  'LOGIN_REQUEST',
  'LOGIN_SUCCESS',
  'LOGIN_FAILED',
  'LOGIN_STATUS',
  'LOGIN_LOGOUT',
  'LOGIN_LOGOUT_REQUEST',
  'USER_TOKEN',
  'USER_INFO',
  'USER_INFO_REQUEST',
  'SMS_SEND',
  'SMS_REQUEST',
  'SMS_SUCCESS',
  'SMS_FAILED',
  'SMS_COUNT',
  'SMS_COUNT_REQUEST',
  'WINDOW_TITLE',
  'WINDOW_SIDEBAR',
  'WINDOW_CUSTOMER_ROUTE',
  'WINDOW_CUSTOMER_ROUTE_CLEAR',
  'REQUEST',
  'REQUEST_START',
  'REQUEST_FINISH',
  'REQUEST_ERROR',
  'REQUEST_CLEAN',
  // Search
  'SEARCH_TRACE_ID'
];

const types = (() => {
  const that = {};
  for (const item of Types) {
    that[item] = item;
  }
  return that;
})();

export default types;
