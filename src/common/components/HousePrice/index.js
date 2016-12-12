import React from 'react';
import './index.less';

const HousePrice = ({ price, render }) => (
  <div className="house price">
    {typeof render === 'function' ? render(price) : <span><span className="icon mobile unit CNY" />price</span>}
  </div>
);

export default HousePrice;
