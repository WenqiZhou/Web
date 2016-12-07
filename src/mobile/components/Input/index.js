import React, { Component, PropTypes, cloneElement } from 'react';
import classnames from 'classnames';
import './index.less';

export default class Input extends Component {
  static propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
    clearable: PropTypes.bool,
    handleClear: PropTypes.func,
    action: PropTypes.node
  };

  render() {
    const { icon, label, handleClear, clearable, action, ...props } = this.props;
    return (
      <div
        className={classnames({
          input: true,
          wrapper: true
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

