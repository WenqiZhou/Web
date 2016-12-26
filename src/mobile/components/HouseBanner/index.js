import React, { Component, PropTypes } from 'react';
import BannerAnim, { Element, Arrow } from 'rc-banner-anim';
import { Image } from '11-common';
import { viewer } from '../../components/ImageViewer';
import HousePrice from '../../../common/components/HousePrice';
import './index.less';

export default class HouseBanner extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      current: 0
    }
  }

  handleView = () => {
    viewer(this.props.list);
  };

  render() {
    return (
      <div onClick={this.handleView} className="house banner">
        <Image src={`${(this.props.list[0] || {}).image_url || ''}_750`} alt="加载中" />
        <HousePrice price={this.props.price} />
      </div>
    )
  }
}
