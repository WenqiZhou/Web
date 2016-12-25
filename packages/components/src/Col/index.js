// layout布局, 由于目前场景下用的比较少,只先做一个三列的就可以,同时留下后期响应式
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import './index.less';

export default class Col extends Component {
  static propTypes = {
    span: PropTypes.number,
    sm: PropTypes.number,
    lg: PropTypes.number,
    offset: PropTypes.number,
    space: PropTypes.number,
    children: PropTypes.any
  };

  render() {
    const classes = {};
    if (this.props.span) {
      classes[`col-${this.props.span}`] = true;
    }

    if (this.props.lg) {
      classes[`col-lg-${this.props.lg}`] = true;
    }

    if (this.props.sm) {
      classes[`col-sm-${this.props.sm}`] = true;
    }

    if (this.props.offset) {
      classes[`col-offset-${this.props.offset}`] = true;
    }

    const style = {};
    if (this.props.space) {
      style.padding = `0 ${this.props.space / 2 / 100}rem`;
    }

    return (
      <div
        style={style}
        className={
          classnames({
            col: true,
            ...classes,
            'col-space': this.props.space
          })
        }
      >
        {this.props.children}
      </div>
    )
  }
}
