import React, { Component } from 'react';
import HouseItemImage from './image';
import './index.less';

export default class HouseItem extends Component {
  render() {
    return (
      <section className="house item">
        <HouseItemImage />
      </section>
    )
  }
}
