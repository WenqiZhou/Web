import React, { Component, PropTypes } from 'react';
import { Link } from 'react-scroll';
import classnames from 'classnames';
import { responsive } from '11-utils';
import Style from './index.less';

export default class ActivityNavigation extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
    fixed: PropTypes.bool
  };

  static defaultProps = {
    fixed: false
  };

  render() {
    return (
      <div
        className={
          classnames({
            [Style.nav]: true,
            fixed: this.props.fixed,
            visible: this.props.list.length > 0
          })}
      >
        <ul>
          {
            this.props.list.map(({ houses }, index) => (
              <Link activeClass="current" key={index} spy to={`scroll_${(Number(index) + 1)}`} offset={responsive.size(-0.6)} smooth>
                <li>
                  {houses.title}
                </li>
              </Link>))
          }
        </ul>
      </div>
    )
  }
}
