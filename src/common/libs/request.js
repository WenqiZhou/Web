import store from '../store';
import { REQUEST } from '../store/types';

const { fetch } = require('autofetch');

fetch.baseHost(process.api);
fetch.callback((response) => {
  if (!response.ok) {
    throw new Error(response.statusText, response.status);
  }
  return response.json();
});
fetch.headers({
  'Client-Version': '1.0.3.5'
});

export const request = ({ key, ...options }) => {
  store.dispatch({
    type: REQUEST,
    key,
    ...options
  });
};

export default fetch;
