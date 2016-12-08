// 输入框组件 根据移动端/桌面端定制不同的样式
// 注意 当需要使用Form进行数据绑定的时候 action的子组件千万不能使用Input类型 因为无法绑定
// Form只能绑定它子一级的组件 需要后续使用decorator重构的时候才能考虑这个问题 不过也没必要考虑太多的需求
// 用input-group包一层就可以了
import React, { Component, PropTypes, cloneElement } from 'react';
import classnames from 'classnames';
import './index.less';

export default class Input extends Component {
  static propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
    clearable: PropTypes.bool,
    handleClear: PropTypes.func,
    action: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    inputClassName: PropTypes.string
  };

  render() {
    const { icon, label, handleClear, clearable, action, style, className = '', ...props } = this.props;
    return (
      <div
        style={style}
        className={classnames({
          input: true,
          wrapper: true,
          [className]: true
        })}
      >
        {
          icon ?
            (
              <span
                className={classnames({
                  icon: true,
                  [icon]: true
                })} />
            ) : ''
        }
        {
          label ? (<span className="label">{label}</span>) : ''
        }
        <input {...props} />
        {
          props.value && clearable ?
            (
              <a onClick={handleClear} className="icon mobile input clear" />
            ) : ''
        }
        {
          action ?
            cloneElement(action,
              {
                className: 'action'
              }) : ''
        }
      </div>
    )
  }
}

export class Group extends Component {
  render() {
    return (
      <div className="input-group">
        {this.props.children}
      </div>
    )
  }
}
