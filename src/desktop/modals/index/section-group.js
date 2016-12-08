import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { EventTypeDescription } from '../../../../libs/enums';

export default class SectionGroup extends Component {
  static propTypes = {
    type: PropTypes.number.isRequired,
    list: PropTypes.array.isRequired
  };

  render() {
    const { type, list } = this.props;
    const eventDescription = EventTypeDescription[type] || {};
    return (
      <div
        className={
          classnames({
            activity: true,
            group: true,
            [`${this.props.list.length}-items`]: true
          })
        }
      >
        <h1>{eventDescription.name}</h1>
        <h2>{eventDescription.description}</h2>
        {

        }
      </div>
    )
  }
}
