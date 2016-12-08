
/*  eslint import/prefer-default-export: 0 */
export const GetVerificationCode = {
  method: 'POST',
  path: '//user/getverificationcode',
  query: {
    xxx: true
  },
  headers: {
    'User-Uin': '100000'
  }
};
