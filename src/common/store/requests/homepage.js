/* eslint import/prefer-default-export: 0 */

// 首页相关接口

export const HOMEPAGE = {
  method: 'GET',
  path: '//mainpage',
  headers: {
    'User-Uin': {
      source: 'User-Uin',
      default: '100000'
    },
    'Client-Token': {
      source: 'User-Uin',
      default: null
    }
  }
};
