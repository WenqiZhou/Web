import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Style from './index.less';

export default class ActivityNavigation extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
    current: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  handleClick = (target) => () => {
    location.hash = target;
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
            this.props.list.map(({ houses }, index) => (
              <li
                key={index}
                onClick={this.handleClick(Number(index) + 1)}
                className={classnames({ current: Number(index) + 1 === this.props.current })}
                target={Number(index) + 1}
              >
                {houses.title}
              </li>)
            )
          }
        </ul>
      </div>
    )
  }
}
