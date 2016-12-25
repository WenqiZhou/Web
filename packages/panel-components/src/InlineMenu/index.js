import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Style from './index.less';

const InlineMenuItem = ({ children, current, onClick }) => (
  <li onClick={onClick} className={classnames({ [Style.item]: true, current: current })}>{children}</li>
);

export default class InlineMenu extends Component {
  static propTypes = {};

  static Item = InlineMenuItem;

  render() {
    return (
      <ul className={Style['inline-menu']}>
        {this.props.children}
      </ul>
    )
  }
}
