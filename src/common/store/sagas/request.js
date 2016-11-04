import { takeEvery } from 'redux-saga';
import { take, call, put, fork } from 'redux-saga/effects';
import Store from '../index';
import { REQUEST, REQUEST_START, REQUEST_FINISH, REQUEST_ERROR, REQUEST_CLEAR } from '../types';
import requests from '../requests';
import ApiTypes from '../requests/types';

function* requestDispatcher({ key, data, callback }) {
  callback = typeof callback === 'function' ? callback : response => response;

  yield put({
    type: REQUEST_START,
    key: ApiTypes[key]
  });
  const { response = {}, error } = yield requests(key, data).then(resp => {
    return { response: callback(resp) };
  }).catch(err => {
    return { error: callback(undefined, err) };
  });
  if (error || response.code !== 200 || response.msg) {
    yield put({
      type: REQUEST_ERROR,
      key: ApiTypes[key],
      error: error || response.msg,
      data: response.data
    });
  } else {
    yield put({
      type: REQUEST_FINISH,
      key: ApiTypes[key],
      error: error || response.msg,
      data: response.data
    });
  }
}

export default function* request() {
  yield* takeEvery(REQUEST, requestDispatcher)
}
