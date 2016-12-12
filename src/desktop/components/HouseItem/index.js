import React, { Component } from 'react';
import classnames from 'classnames';
import HousePrice from '../../../common/components/HousePrice';
import { HouseType } from '../../../../libs/enums';
import Starts from '../../../common/components/Stars'
import { go } from '../../../common/libs/utils/utils';
import './index.less';

export default class HouseItem extends Component {
  handleClick = (id) => () => {
    go(`/house/${id}`);
  };

  render() {
    const { data } = this.props;

    return (
      <section onClick={this.handleClick(data.house_id)} className="house item">
        <div style={{ position: 'relative' }}>
          <img src={`${((data.images || [])[0] || {}).image_url}_750`} alt={data.title} />
          <HousePrice price={data.price} render={(number) => <span>{number}元／<span className="small">晚</span></span>} />
        </div>
        <div className="info">
          <div className="avatar">
            <img src={data.landlord.head_url ? `${data.landlord.head_url}_750` : '/assets/images/icons/image_mobile_avatar.png'} alt={data.landlord.real_name} />
          </div>
          <div>
            <div title={data.title} className="title">
              {data.city}•{data.title}
            </div>
            <div className="description">
              {HouseType[data.house_type]} •
              <Starts stars={Number(data.score)} />•
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
        </div>
      </section>
    )
  }
}
