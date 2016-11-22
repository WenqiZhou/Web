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
            >
              <Element.BgElement
                key={`bg_${index}`}
                style={{
                  backgroundImage: `url(${imageUrl}_750)`
                }}
              />
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
