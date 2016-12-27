import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { redirect } from '11-utils';
import Style from './index.less';

const InlineMenuItem = ({ children, current, onClick }) => (
  <li onClick={onClick} className={classnames({ [Style.item]: true, current: current })}>{children}</li>
);

class MenuContent extends Component {
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

export default class InlineMenu extends Component {
  static propTypes = {
    current: PropTypes.string,
    host: PropTypes.bool,
    list: PropTypes.object.isRequired,
    prefix: PropTypes.string
  };

  handleClick = (key) => () => {
    if (key === this.props.current) return;
    redirect.go(`/dashboard${this.props.host ? '/host' : ''}/${this.props.prefix}${key === '/' ? '' : `/${key}`}`);
  };

  render() {
    return (
      <MenuContent>
        {
          Object.keys(this.props.list).map((key) => (
            <MenuContent.Item onClick={this.handleClick(key)} current={this.props.current === key} key={key}>{this.props.list[key]}</MenuContent.Item>
          ))
        }
      </MenuContent>
    )
  }
}
