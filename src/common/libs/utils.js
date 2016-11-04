import { push } from 'react-router-redux';
import classNames from 'classnames';
import store from '../store';
import { WINDOW_TITLE, USER_TOKEN, WINDOW_CUSTOMER_ROUTE } from '../store/types';

const _ = {
  merge: require('lodash/merge')
};

let uniqueID = null;
const { appname } = require('../../../config/config.json');

const setTitle = function setTitle(title) {
  if (!store) {
    return;
  }
  store.dispatch({ type: WINDOW_TITLE, title: `${title ? `${title}-` : ''}${appname}` });
};

const redirect = function redirect(url) {
  store.dispatch(push(url || '/'));
};

const className = function className(...props) {
  return { className: classNames(...props) };
};

const getToken = () => {
  const auth = store.getState().auth;
  return auth && auth.accessToken ? auth.accessToken : null;
};

const setPath = (path) => {
  if (!path) {
    return;
  }
  store.dispatch({
    type: WINDOW_CUSTOMER_ROUTE,
    path
  })
};

const getUniqueID = (forced = false) => {
  if (uniqueID && forced === false) {
    return uniqueID;
  }
  if (typeof forced === 'string') {
    uniqueID = forced;
    return forced;
  }
  let num = '';
  for (let i = 0; i < 6; i++) {
    num += Math.floor(Math.random() * 10);
  }
  uniqueID = num;
  return num;
};

// {a.b: 1} => {a: {b: 1}}
const increaseToObject = (key, value) => {
  const keys = key.split('.');
  return keys.reverse().reduce((previousValue, currentValue) => {
    if (Number.isInteger(Number(currentValue))) {
      const arr = [];
      arr[currentValue] = previousValue;
      return arr;
    }
    return { [currentValue]: previousValue }
  }, value)
};

// {0.a:a, 0.b: b} => [{a ,b}]
const increaseToArray = (group) => {
  return Object.keys(group).reduce((previousValue, currentValue) => {
    return _.merge(previousValue, increaseToObject(currentValue, group[currentValue]))
  }, []);
};

export {
  setTitle,
  redirect,
  className,
  getToken,
  getUniqueID,
  setPath,
  increaseToArray,
  increaseToObject
}
