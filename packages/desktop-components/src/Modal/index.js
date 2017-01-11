// 基本弹窗组件
import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { Dimmer } from '11-common';
import './index.less';

const Modal = ({ visible, children, onClose, title, className }) => visible ?
  (
    <Dimmer onClick={onClose}>
      <div
        className={classnames({
          'lg-only': true,
          modal: true,
          [className]: true
        })}
      >
        {
          title ?
            <div className="title">
              {title}
              {typeof onClose === 'function' ? <span onClick={onClose} className="icon close" /> : ''}
            </div> : ''
        }
        <div className="content">
          {children}
        </div>
      </div>
    </Dimmer>
  ) : '';

Modal.propTypes = {
  visible: PropTypes.bool, // 一般来说 默认调用的时候弹窗就会显示 所以visible始终应该为true 但是为了拓展新考虑还是保留这个属性 每次都应该带上
  onClose: PropTypes.func,
  className: PropTypes.string, // 默认宽度为1倍宽度, 可以使用className=double设置为登录弹窗的两倍宽度 也可通过修改className自定义大小,默认都是居中
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node])
};

Modal.defaultProps = {
  visible: false,
  className: ''
};

export default Modal;
