import { handleActions } from 'redux-actions';
import Types from '../types';

import { UserInfo } from '../../../../libs/mock';

const User = handleActions({
  [Types.USER_SIGNUP](state, { user }) {
    return { ...state, ...user };
  }
}, {
  ...UserInfo,
  access_token: '\\x01\\x014\\xec\\xeb\\xa2Xb\\x98\\xb4Xb\\x98\\xb4X0bPy7QfUCBVdtwj\\xd8(\\x84\\xab\\xee]\\xbd,\\xe7\\xce-\\xc4\\xd2.\\x82\\x93',
  ret: 0,
  uin: 887942050,
  token: 'Rj8xuaKwdrEqQbKiGyBtm2UxRd4J6beTIteHhf54Gn5KpW8K',
  refresh_token: '\\x01\\x014\\xec\\xeb\\xa2Xb\\x98\\xb4Xb\\x98\\xb4v7Z2YGDAJNzh9gU4\\xa3\\xddNM<\\xd5\\xf45\\xa8\\x89\\xae6D?}\\xfa'
});

export default User;
