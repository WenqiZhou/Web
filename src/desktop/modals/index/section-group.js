import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { EventTypeDescription } from '../../../../libs/enums';
import Item from './item';

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
            [`items_${this.props.list.length}`]: true
          })
        }
      >
        <h1>{eventDescription.name}</h1>
        <h2>{eventDescription.description}</h2>
        {
          list.map((item, index) => {
            return (
              <Item type={type} key={index} data={item} />
            )
          })
        }
      </div>
    )
  }
}
