import React, { Component } from 'react';
import classnames from 'classnames';
import './index.less';

const Dimmer = ({ children, visible = true, color = 'black', className, onClick }) => (
  <div
    onClick={typeof onClick === 'function' ? (e) => {
      if (e.target.className.match(/(dimmer|close)/)) {
        onClick(e);
      }
    } : ''}
    className={classnames({
      dimmer: true,
      visible,
      [color]: true,
      className
    })}
  >
    {children}
  </div>
);

export default Dimmer;
