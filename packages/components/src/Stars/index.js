import React, { PropTypes } from 'react';
import './index.less';

const Stars = ({ stars = 0 }) => {
  const half = stars % 1 !== 0;
  const int = stars - (stars % 1);

  return (
    <span className="stars">
      {
        new Array(int).fill('v', 0).map((item, index) => (
          <span key={index} className="icon star item" />
        ))
      }
      {
        half ? (
          <span className="icon star half item" />
        ) : ''
      }
    </span>
  )
};

Stars.propType = {
  stars: PropTypes.number.required
};

export default Stars;
