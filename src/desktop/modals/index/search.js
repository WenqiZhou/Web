import React, { Component } from 'react';
import Select from 'rc-select';
import 'rc-select/assets/index.css';

export default class Search extends Component {
  render() {
    return (
      <div className="search">
        <div className="input-group">
          <input className="keyword field" placeholder="目的地" />
          <div className="input-group time field">
            <input className="checkin" placeholder="入住时间" />
            <span className="icon search arrow right" />
            <input className="checkout" placeholder="退房时间" />
          </div>
          <select className="people field" placeholder="入住人数">
            <option>入住人数</option>
            <option key="1">1</option>
          </select>
        </div>
        <button>搜索</button>
      </div>
    )
  }
}
