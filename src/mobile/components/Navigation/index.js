import React, { Component } from 'react';
import { go } from '../../../common/libs/utils/utils';
import './index.less';

/* eslint import/prefer-default-export: 0 */
export class SearchBar extends Component {
  render() {
    return (
      <nav className="sm-only top search-bar">
        <div
          onClick={() => {
            go('/m/auth')
          }}
          className="icon mobile menu"
        />
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
