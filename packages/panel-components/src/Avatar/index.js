import React, { PropTypes } from 'react';
import { Image } from '11-common';
import classnames from 'classnames';
import Style from './index.less';

const Avatar = ({ url, className, style }) => (
  <div className={classnames(Style.avatar, className)} style={style}>
    <Image src={url} />
  </div>
);

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Avatar;
