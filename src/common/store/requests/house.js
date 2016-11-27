/* eslint import/prefer-default-export: 0 */
import { goBack } from '../../libs/utils';

// 房屋信息相关接口
export const HouseDetail = {
  path: '//house/{id}/info',
  method: 'GET',
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
    if (response.ret === -2004) {
      alert(response.err);
      goBack();
    } else {
      return response;
    }
    /* eslint consistent-return: 0 */
  }
};
