import React from 'react';
import HouseItem from '../HouseItem';
import './index.less';

const HOUSETYPEItem = ({ data }) => {
  const { house } = data;
  return (
    <HouseItem data={house} />
  )
};

export default HOUSETYPEItem;
