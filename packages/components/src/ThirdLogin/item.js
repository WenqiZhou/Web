import React, { PropTypes } from 'react';
import classnames from 'classnames';

const item = ({ type, onClick, mobile = false }) => (
  <li>
    <a
      onClick={onClick}
      className={
        classnames({
          icon: true,
          mobile,
          login: true,
          [type]: true
        })
      } />
  </li>
);

item.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func
};

export default item;
