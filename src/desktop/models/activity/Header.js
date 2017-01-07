// PC活动顶部大图
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Image } from '11-common';
import Style from './index.less';

export const HeaderImage = ({ top_image: image = {} }) => (
  <div
    className={Style.background}
    style={{
      backgroundImage: `url("${image.url}_1615")`
    }} />
);

export const HeaderTitle = ({ title, sub_title: subTitle }) => (
  <div className={Style.title}>
    <h1>{title}</h1>
    <h2>{subTitle}</h2>
  </div>
);

export default class ActivityHeader extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.node])
  };

  render() {
    return (
      <div className={Style.header}>
        {
          this.props.children
        }
      </div>
    )
  }
}
