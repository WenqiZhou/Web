import React, { Component, PropType } from 'react';
import classnames from 'classnames';
import { Image } from '11-common';
import Style from './index.less';

export const ActivityTitle = ({ title_single: title = {} }) => (
  <div className={classnames(Style.activity, Style.title)}>
    <span>{title.title}</span>
  </div>
);

export const ActivityBanner = ({ image }) => (
  <div className={classnames(Style.activity, Style.banner)}>
    <Image src={`${image.url}_1615`} />
  </div>
);
