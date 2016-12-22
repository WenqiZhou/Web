import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Card = ({ children, className,style }) => (
  <section className={classnames('card', className)} style={style}>
    {children}
  </section>
);

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element, PropTypes.node]).isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Card;
