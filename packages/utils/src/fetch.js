import store from '11-store';

import { REQUEST } from '11-store/types';

const isNode = typeof window === 'undefined';

const { fetch } = require('autofetch');

fetch.baseHost(process.api);

fetch.callback((response) => {
  return new Promise((recept, reject) => {
    if (!response.ok) {
      reject(response);
    }
    recept(response.text())
  }).then((responseText) => {
    if (responseText.match(/house_id/)) {
      try {
        return JSON.parse(responseText.replace(/"house_id": ?(\d*),/g, (a, b) => `"house_id": "${b}",`))
      } catch (e) {
        throw new Error(e);
      }
    } else {
      return JSON.parse(responseText);
    }
  });
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
