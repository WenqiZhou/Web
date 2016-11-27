import React, { Component } from 'react';
import HouseList from '../../components/HouseList';
import '../../style/search.less';

const MobileSearch = ({ list }) => (
  <div className="mobile search">
    <div className="results">
      <HouseList data={list} />
      <button className="filter button">
        筛选条件
      </button>
    </div>
  </div>
);

export default MobileSearch;
