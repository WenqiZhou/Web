import React, { Component } from 'react';
import HouseList from '../../components/HouseList';
import { SearchBar } from '../../components/Navigation';
import '../../style/search.less';

const MobileSearch = ({ list }) => (
  <div className="mobile search">
    <SearchBar />
    <div className="results">
      <HouseList data={list} />
      <button className="filter button">
        筛选条件
      </button>
    </div>
  </div>
);

export default MobileSearch;
