import { push, replace, goBack as reduxGoBack } from 'react-router-redux';
import store from '11-store';
import { WINDOW_TITLE } from '11-store/types';

const { appname } = require('../../../config/config.json');

const setTitle = (title) => (store ?
  store.dispatch({
    type: WINDOW_TITLE,
    title: `${title ? `${title}-` : ''}${appname}`
  }) : undefined);

export default setTitle;
