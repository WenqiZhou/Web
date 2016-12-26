import { push, replace, goBack as reduxGoBack } from 'react-router-redux';
import store from '11-store';
import { WINDOW_CUSTOMER_ROUTE } from '11-store/types';

const setPath = (path) => store.dispatch({
  type: WINDOW_CUSTOMER_ROUTE,
  path
});

export default setPath;
