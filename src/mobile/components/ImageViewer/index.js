import React, { Component } from 'react';
import ReactDom from 'react-dom';
import BannerAnim, { Element, Arrow } from 'rc-banner-anim';
import Dimmer from '11-common';
import './index.less';

class Viewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  render() {
    return (
      <Dimmer onClick={this.props.destroy}>
        <div
          className="image-viewer"
          style={{
            height: Number(((window.document.body.clientWidth * 231) / 375).toFixed(0))
          }}
        >
          <BannerAnim
            prefixCls="images"
            autoPlay={false}
            type="across"
            thumb={false}
            onChange={this.handleBannerChange}
          >
            {
              this.props.list.map(({ image_url: imageUrl }, index) => (
                <Element
                  key={index}
                  prefixCls="item"
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
          {
            // 这里有个坑,如果直接在close上附加destroy,会在销毁的时候报错(...node tree .....)
            // 所以将这里的点击事件也一起挂载到Dimmer上去监听,反正dimmer应该也没有其他事件了
          }
          <div className="close">
            <span className="icon mobile close" />
          </div>
        </div>
      </Dimmer>
    )
  }
}

const initial = () => {
  const div = window.document.createElement('div');
  window.document.body.appendChild(div);

  const destroy = () => {
    ReactDom.unmountComponentAtNode(div);
  };

  const viewer = (list) => {
    ReactDom.render((
      <Viewer list={list} destroy={destroy} />
    ), div);
  };

  return {
    destroy,
    viewer
  }
};

export default initial();
