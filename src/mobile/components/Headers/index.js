import React, { Component } from 'react';
import './index.less';

/* eslint import/prefer-default-export: 0 */
export class SearchBar extends Component {
  render() {
    return (
      <nav className="top search-bar">
        <div className="icon mobile menu" />
        <button>
          <span className="icon mobile search" />
          想去哪里?
        </button>
      </nav>
    )
  }
}
