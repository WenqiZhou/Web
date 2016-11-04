import { fork } from 'redux-saga/effects';

const context = require.context('./', false, /\.js$/);

const keys = context.keys().filter(item => (item !== './index.js' && item !== './sagas.js'));

export default function* root() {
  for (let i = 0; i < keys.length; i++) {
    yield fork(context(keys[i]));
  }
}
