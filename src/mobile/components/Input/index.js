import React, { Component } from 'react';
import classnames from 'classnames';
import './index.less';

export default class Input extends Component {
  render() {
    const { icon, label, handleClear, clearable, ...props } = this.props;

    return (
      <div
        className={classnames({
          input: true,
          wrapper: true
        })}
      >
        {
          icon ? (
            <span
              className={classnames({
                icon: true,
                [icon]: true
              })} />
          ) : ''
        }
        {
          label ? (
            <span className="label">{label}</span>
          ) : ''
        }
        <input {...props} />
        {
          props.value && clearable ? (
            <a onClick={handleClear} className="icon mobile input clear" />
          ) : ''
        }
      </div>
    )
  }
}

