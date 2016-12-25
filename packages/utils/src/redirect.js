import { push, replace, goBack as reduxGoBack } from 'react-router-redux';
import store from '../../../src/common/store';
import { WINDOW_TITLE, USER_TOKEN, WINDOW_CUSTOMER_ROUTE } from '../../../src/common/store/types';

const _ = {
  merge: require('lodash/merge')
};

const { appname } = require('../../../config/config.json');

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