// PC活动顶部大图
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Image } from '11-common';
import Style from './index.less';

// 图片
export const HeaderImage = ({ top_image: image = {} }) => (
  <div
    className={Style.background}
    style={{
      backgroundImage: `url("${image.url}_1615")`
    }} />
);

// 两行标题
export const HeaderTitle = ({ title, sub_title: subTitle }) => (
  <div className={Style.title}>
    <h1>{title}</h1>
    <h2>{subTitle}</h2>
  </div>
);

// 说明文本
export const HeaderText = ({ text }) => (
  <div className={Style.text}>
    <p>{text.content}</p>
  </div>
);

// 单行小标题
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
