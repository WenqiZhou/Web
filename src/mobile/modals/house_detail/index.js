import React, { Component } from 'react';
import classnames from 'classnames';
import { SearchBar } from '../../components/Navigation';
import '../../style/house_detail.less';
import HouseBanner from '../../components/HouseBanner';
import HouseType from '../../components/HouseType';
import { LandLordDesc } from '../../../../libs/enums';
import { enterTime, leaveTime, getCp } from '../../../common/libs/utils/timeparse';

export default class MobileHouseDetail extends Component {
  render() {
    const { data } = this.props;
    data.landlord = data.landlord || {};

    return (
      <div className="sm-only house detail">
        <SearchBar />
        <div>
          <HouseBanner list={data.images || []} price={data.price} />
          <main className="white">
            <section className="landlord dividing">
              <div className="title">
                {data.title}
              </div>
              <p>{data.like_count}个赞
                <a
                  className={
                    classnames({
                      icon: true,
                      like: !data.is_liked,
                      liked: data.is_liked
                    })
                  }
                />
              </p>
              <p>
                {
                  data.house_verified ?
                    <span style={{ marginRight: '.24rem' }}>
                      <a className="icon mobile landlord varify" />
                      验真
                    </span> : <span />
                }
                {
                  data.photo_type ?
                    <span>
                      <a className="icon mobile camera" />
                      实拍
                    </span> : <span />
                }
              </p>
              <div className="avatar">
                <img src={data.landlord.head_url ? `${data.landlord.head_url}_750` : '/assets/images/icons/image_mobile_avatar.png'} alt="加载中" />
              </div>
              <p>
                房东：{data.landlord.real_name}
              </p>
              <p>
                {
                  Object.keys(LandLordDesc).filter(key => data.landlord[key] === true || data.landlord[key] === 1).map((key, index) => (
                    <span key={index}>
                      {index === 0 ? <span /> : <span style={{ padding: '0 .5em' }}>•</span>}
                      {LandLordDesc[key]}
                    </span>
                  ))
                }
              </p>
            </section>
            <section className="volume borded">
              <HouseType {...data} />
            </section>
            <section className="description dividing">
              <div className="title">
                关于此房源
              </div>
              <p>{data.house_description}</p>
              <img src={`${((data.images || [])[0] || {}).image_url}_750`} alt="加载中" />
            </section>
            <section className="dividing source">
              <p>房源：</p>
              <dl>
                <dt>入住时间</dt>
                <dd>{enterTime(data)}</dd>
                <dt>退房时间</dt>
                <dd>{leaveTime(data)}</dd>
                <dt>最短住宿天数</dt>
                <dd>{data.min_booking_days || 1}天</dd>
                <dt>退订政策</dt>
                <dd><a>{getCp(data)}</a></dd>
                <dt>可租状态</dt>
                <dd><a>查看日历</a></dd>
              </dl>
            </section>
            <section className="dividing devices">
              <p>便利设施：</p>
              <ul>
                <li>
                  <span className="icon devices tv" />
                  电视
                </li>
                <li>
                  <span className="icon devices wifi" />
                  无线网
                </li>
                <li>
                  <span className="icon devices wifi" />
                  无线网
                </li>
              </ul>
            </section>
          </main>
        </div>
      </div>
    );
  }
}
