// 基本弹窗组件
import React from 'react';
import classnames from 'classnames';
import { Dimmer } from '11-common';
import './index.less';

const Modal = ({ visible, children, onClose, className = '' }) => (
  <Dimmer onClick={onClose}>
    <div
      className={classnames({
        desktop: true,
        modal: true,
        [className]: true
      })}
    >
      {children}
    </div>
  </Dimmer>
);

export default Modal;
