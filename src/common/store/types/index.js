const Types = [
  'USER_SIGNUP',
  'SMS_MOBILE',
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
