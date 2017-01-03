// 输入框组件 根据移动端/桌面端定制不同的样式
// 注意 当需要使用Form进行数据绑定的时候 action的子组件千万不能使用Input类型 因为无法绑定
// Form只能绑定它子一级的组件 需要后续使用decorator重构的时候才能考虑这个问题 不过也没必要考虑太多的需求
// 用input-group包一层就可以了
import React, { Component, PropTypes, cloneElement } from 'react';
import classnames from 'classnames';
import Style from './index.less';

export default class Input extends Component {
  static Group = () => (
    <div className="input-group">
      {this.props.children}
    </div>
  );

  static Style = Style;

  static propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
    info: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    clearable: PropTypes.bool,
    handleClear: PropTypes.func,
    action: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    inputClassName: PropTypes.string,
    onEnter: PropTypes.string,
  };

  onKeyPress = (e) => {
    console.log(e)
  };

  render() {
    const { icon, label, handleClear, clearable, action, onEnter, style, className = '', ...props } = this.props;
    return (
      <div
        style={style}
        className={classnames({
          'input wrapper': true,
          // [Style.input]: true,
          // [Style.wrapper]: true,
          [className]: true
        })}
      >
        {
          icon ?
            (
              <span
                className={classnames({
                  icon: true,
                  // [Style.icon]: true,
                  [icon]: true
                })} />
            ) : ''
        }
        {
          label ? (<span className="label">{label}</span>) : ''
        }
        <input {...props} onKeyPress={this.onKeyPress} />
        {
          props.value && clearable ?
            (
              <a onClick={handleClear} className={classnames({
                // [Style.icon]: true,
                'icon mobile input clear': true
              })} />
            ) : ''
        }
        {
          action ?
            cloneElement(action,
              {
                className: Style.action
              }) : ''
        }
      </div>
    )
  }
}
