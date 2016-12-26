import React, { PropTypes } from 'react';

const Image = ({ src, ...props }) => (
  <img src={src.match(/undefined|\/_750/) || src === '_750' ? '' : src} {...props} />
);

Image.propTypes = {
  src: PropTypes.string.isRequired
};

export default Image;
