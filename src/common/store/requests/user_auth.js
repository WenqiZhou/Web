
/*  eslint import/prefer-default-export: 0 */
export const SignUp = {
  method: 'POST',
  path: '//user_auth/signup',
  headers: {
    'User-Uin': '100000'
  },
  body: {
    source: 'web'
  }
};
