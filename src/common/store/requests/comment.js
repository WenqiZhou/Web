/* eslint import/prefer-default-export: 0 */

// 评论相关接口
export const COMMENT_LIST = {
  method: 'GET',
  path: '//comment/user/{id}',
  params: {
    id: {
      source: 'user.uin',
      default: '100000'
    }
  },
  query: {
    n: 10,
    l: {
      source: 'Request.COMMENT_LIST.data.last_id',
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
