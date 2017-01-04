import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Style from './index.less';

const Card = ({ basic, children, className = '', wrapperClassName = '', style, wrapperStyle, title }) => (
  <section
    style={wrapperStyle}
    className={classnames({
      [Style.card]: true,
      [wrapperClassName]: true,
      'card-bordered': !basic
    })}
  >
    {
      title ? <div className="card-title">{title}</div> : ''
    }
    <div className={classnames('card-content', className)} style={style}>
      {children}
    </div>
  </section>
);

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element, PropTypes.node]),
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

export default Card;
