import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Card = ({ children, className, style, title }) => (
  <section className={classnames('card', className)} style={style}>
    {
      title ? <div className="card-title">{title}</div> : ''
    }
    {children}
  </section>
);

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element, PropTypes.node]).isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

export default Card;
