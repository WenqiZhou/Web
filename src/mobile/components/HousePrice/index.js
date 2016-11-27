import React from 'react';
import './index.less';

const HousePrice = ({ price }) => (
  <div className="house price">
    <span className="icon mobile unit CNY" />
    {price}
  </div>
);

export default HousePrice;
