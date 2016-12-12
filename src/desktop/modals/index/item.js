import React, { Component } from 'react';
import classnames from 'classnames';
import { go } from '../../../common/libs/utils/utils';

export default class IndexActivityItems extends Component {
  parseData = (data, type) => {
    switch (type) {
      case 6: {
        return data.activity_new;
      }
      default: {
        return data.activity;
      }
    }
  };

  handleClick = (id) => () => {
    go(`activity/${id}`)
  };

  render() {
    const data = this.parseData(this.props.data, this.props.type);
    return (
      <div
        onClick={this.handleClick(data.activity_id)}
        className={classnames({
          activity: true,
          item: true,
          [this.props.className]: true
        })}
      >
        <div style={{ position: 'relative' }}>
          {data ? <img src={`${data.images[0].image_url}_750`} alt={data.title} /> : '' }
          <h1>{data.title}</h1>
          <h2>{data.sub_title}</h2>
        </div>
      </div>
    );
  }
}
