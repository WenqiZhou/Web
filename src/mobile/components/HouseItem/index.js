import React, { Component } from 'react';
import classnames from 'classnames';
import HouseItemImage from './image';
import { HouseType } from '../../../../libs/enums';
import Starts from '../../../common/components/start';
import { go } from '../../../common/libs/utils';
import './index.less';

export default class HouseItem extends Component {
  handleClick = (url) => () => go(url);

  render() {
    const { data, href } = this.props;
    return (
      <section onClick={this.handleClick(href)} className="house item">
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
          <div>
            <div className="left">
              <div title={data.title} className="title">
                {data.title}
              </div>
              <div className="description">
                {HouseType[data.house_type]} •
                <Starts stars={Number(data.score)} />• {data.baidu_city}{data.baidu_district}
              </div>
            </div>
            <div className="likes">
              <span
                className={classnames({
                  icon: true,
                  like: !data.is_liked,
                  liked: data.is_liked
                })} />
              {data.like_count}
            </div>
          </div>
        </div>
      </section>
    )
  }
}
