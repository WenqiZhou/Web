import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Style from './index.less';

export default class ActivityNavigation extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
    current: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  render() {
    return (
      <div
        className={
          classnames({
            [Style.nav]: true,
            visible: this.props.list.length > 0
          })}
      >
        <ul>
          {
            this.props.list.map(({ title_single }, index) => (
              <li
                key={index}
                className={classnames({ current: index === this.props.current })}
              >
                {title_single.title}
              </li>)
            )
          }
        </ul>
      </div>
    )
  }
}
