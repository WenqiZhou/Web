import { push, replace, goBack as reduxGoBack } from 'react-router-redux';
import store from '../../store';
import { WINDOW_TITLE, USER_TOKEN, WINDOW_CUSTOMER_ROUTE } from '../../store/types';

const _ = {
  merge: require('lodash/merge')
};

const { appname } = require('../../../../config/config.json');

export const setTitle = (title) => (store ? store.dispatch({
  type: WINDOW_TITLE,
  title: `${title ? `${title}-` : ''}${appname}`
}) : undefined);

export const redirect = (url) => store.dispatch(replace(url || '/'));

export const go = (url) => store.dispatch(push(url || '/'));

export const goBack = () => store.dispatch(reduxGoBack());

export const setPath = (path) => store.dispatch({
  type: WINDOW_CUSTOMER_ROUTE,
  path
});

// {a.b: 1} => {a: {b: 1}}
export const increaseToObject = (key, value) => {
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
export const increaseToArray = (group) => Object.keys(group).reduce((previousValue, currentValue) => {
  return _.merge(previousValue, increaseToObject(currentValue, group[currentValue]))
}, []);
