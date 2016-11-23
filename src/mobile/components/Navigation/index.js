import React, { Component } from 'react';
import './index.less';

/* eslint import/prefer-default-export: 0 */
export class SearchBar extends Component {
  render() {
    return (
      <nav className="top search-bar">
        <div className="icon mobile menu" />
        <button className="clearfix">
          <img className="icon" src="/assets/images/icons/icon_mobile_search.png" alt="search" />
          <span className="description">
            想去哪里?
          </span>
        </button>
      </nav>
    )
  }
}
