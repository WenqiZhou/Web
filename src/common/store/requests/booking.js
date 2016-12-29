/* eslint import/prefer-default-export: 0 */

export const BOOKING_LIST = {
  method: 'GET',
  path: '//booking/bookinglist/{uin}',
  params: {
    uin: {
      source: 'user.uin',
      default: '10000'
    }
  },
  query: {
    n: 10,
    l: {
      source: 'Request.BOOKING_LIST.data.last_create_time',
      default: null
    }
  },
  headers: {
    'User-Uin': {
      source: 'user.uin',
      default: '100000'
    },
    'Client-Token': {
      source: 'user.token',
      default: null
    }
  }
};

export const BOOKING_DETAIL = {
  method: 'GET',
  path: '//booking/bookid/{id}',
  headers: {
    'User-Uin': {
      source: 'user.uin',
      default: '100000'
    },
    'Client-Token': {
      source: 'user.token',
      default: null
    }
  }
};
