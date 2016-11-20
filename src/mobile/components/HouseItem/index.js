import React, { Component } from 'react';
import HouseItemImage from './image';
import './index.less';

export default class HouseItem extends Component {
  render() {
    const { data } = this.props;
    console.log(data)
    return (
      <section className="house item">
        <div style={{ position: 'relative' }}>
          <HouseItemImage images={data.images} />
          <div className="price">
            <span className="icon mobile unit CNY" />
            {data.price}
          </div>
        </div>
        <div className="info">
          <div className="title">
            {data.title}
          </div>
          <div className="description">
            desc
            <div className="likes">
              likes
            </div>
          </div>
          <div className="avatar">
            avatar
          </div>
        </div>
      </section>
    )
  }
}
