import React, { Component, PropTypes } from 'react';
import HouseItem from '../HouseItem';
import './index.less';

const HouseListEmpty = () => (
  <div>没有结果</div>
);

export default class HouseList extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  };

  render() {
    const { data = [] } = this.props;
    return (
      <div className="house list">
        {
          data.length > 0 ? data.map((item, index) => (
            <HouseItem key={`search_list_${index}`} data={item} />
          )) : HouseListEmpty
        }
      </div>
    )
  }
}
