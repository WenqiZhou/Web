/* eslint import/prefer-default-export: 0 */
import { goBack } from '../../libs/utils/utils';

// 房屋信息相关接口
export const HOUSE_DETAIL = {
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
  callback: ({ params }) => (response) => {
    if (response.ret === -2004) {
      /* eslint no-alert: 0 */
      alert(response.err);
      goBack();
    } else {
      return {
        [params.id]: response,
        ret: response.ret
      };
    }
    /* eslint consistent-return: 0 */
  }
};
