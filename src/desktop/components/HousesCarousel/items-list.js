import React, { Component } from 'react';
import classnames from 'classnames';
import Items from '../../components/HouseItem';

const ItemsList = ({ list }) => (
  <div
    className={classnames({
      list: true,
      [`lines_${Number((list.length / 3) + 1).toFixed(0)}`]: true
    })}
  >
    {
      list.map((item, index) => <Items key={index} data={item.house} />)
    }
  </div>
);

export default ItemsList;
