import store from '../store';
import { REQUEST } from '../store/types';

const { fetch } = require('autofetch');

fetch.baseHost((url) => {
  return `${process.api.replace(/\/$/, '')}/${url.replace(/^\//, '')}`;
});
fetch.callback((response) => {
  if (!response.ok) {
    throw new Error(response.statusText, response.status);
  }
  return response.json();
});

export const request = (key, data, callback) => {
  store.dispatch({
    type: REQUEST,
    key,
    data,
    callback
  })
};

export default fetch;
