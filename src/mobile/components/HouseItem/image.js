import React, { Component } from 'react';
import BannerAnim, { Element, Arrow } from 'rc-banner-anim';
import './index.less';

export default class HouseItemImage extends Component {
  render() {
    return (
      <BannerAnim prefixCls="images" autoPlay={false} type="across">
        {
          (this.props.images || []).map(({ image_url: imageUrl }, index) => (
            <Element
              key={index}
              prefixCls="house-images"
              style={{
                height: ((310 / 375) * document.body.clientWidth)
              }}
            >
              <img src={`${imageUrl}_750`} alt="img" />
            </Element>
          ))
        }
        <Arrow arrowType="prev" key="prev" prefixCls="arrow">
          <div className="icon mobile prev" />
        </Arrow>
        <Arrow arrowType="next" key="next" prefixCls="arrow">
          <div className="icon mobile next" />
        </Arrow>
      </BannerAnim>
    )
  }
}
