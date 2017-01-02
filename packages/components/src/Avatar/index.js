import React, { PropTypes } from 'react';
import Image from '../Image';
import classnames from 'classnames';
import Style from './index.less';

const defaultAvatar = '/assets/images/icons/image_mobile_avatar.png';

const Avatar = ({ url, className, style }) => (
  <div className={classnames(Style.avatar, className)} style={style}>
    <Image src={url === defaultAvatar ? url : `${url}_750`} />
  </div>
);

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

Avatar.defaultProps = {
  url: defaultAvatar
};

export default Avatar;
