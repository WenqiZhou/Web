import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Image, Stars } from '11-common';
import { redirect } from '11-utils';
import HousePrice from '../../../common/components/HousePrice';
import { HouseType } from '../../../../libs/enums';
import './index.less';

export default class HouseItem extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func
  };

  handleClick = (id) => () => {
    if (typeof this.props.onClick !== 'function') {
      redirect.go(`/house/${id}`);
    } else {
      this.props.onClick(this.props.data);
    }
  };

  render() {
    const { data } = this.props;
    data.landlord = data.landlord || {};
    return (
      <section onClick={this.handleClick(data.house_id)} className="house item">
        <div style={{ position: 'relative' }}>
          <Image src={`${((data.images || [])[0] || {}).image_url}_750`} alt={data.title} />
          <HousePrice
            price={data.price}
            render={(number) =>
              <span>{number / 100}元／<span className="small">晚</span></span>
            }
          />
        </div>
        <div className="info">
          <div className="avatar">
            <Image src={data.landlord.head_url ? `${data.landlord.head_url}_750` : '/assets/images/icons/image_mobile_avatar.png'} alt={data.landlord.real_name} />
          </div>
          <div className="content">
            <div title={data.title} className="title">
              {data.city}•{data.title}
            </div>
            <div className="description">
              {HouseType[data.house_type]} •
              <Stars stars={Number(data.score)} />•
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
