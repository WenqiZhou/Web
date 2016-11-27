import React, { Component } from 'react';
import { SearchBar } from '../../components/Navigation';
import '../../style/house_detail.less';
import HouseBanner from './HouseBanner';

export default class MobileHouseDetail extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="house detail">
        <SearchBar />
        <main>
          <HouseBanner list={data.images || []} />
        </main>
      </div>
    );
  }
}
