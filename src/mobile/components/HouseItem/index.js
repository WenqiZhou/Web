import React, { Component } from 'react';
import HouseItemImage from './image';
import { HouseType } from '../../../../libs/enums';
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
          <div className="avatar">
            <img src={data.landlord.head_url ? `${data.landlord.head_url}_750` : '/assets/images/icons/image_mobile_avatar.png'} alt={data.landlord.real_name} />
          </div>
          <div className="left">
            <div title={data.title} className="title">
              {data.title}
            </div>
            <div className="description">
              {HouseType[data.house_type]} •

            </div>
          </div>
          <div className="likes">
            likes
          </div>
        </div>
      </section>
    )
  }
}
