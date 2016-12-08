// 封装了事件的input类
import React, { Component, PropTypes } from 'react';

export default class Input extends Component {
  static defaultProps = {
    type: 'text',
    style: {}
  };

  static propTypes = {
    onChange: PropTypes.func,
    onEnter: PropTypes.func,
    type: PropTypes.string,
    style: PropTypes.object
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.props.onEnter(e);
    }
  };

  render() {
    const { type, onChange, className, style } = this.props;
    return (
      <input
        type={type}
        onChange={onChange}
        className={className}
        style={style}
        onKeyDown={this.handleKeyDown}
      />
    )
  }
}

