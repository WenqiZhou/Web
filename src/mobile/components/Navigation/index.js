import React, { Component } from 'react';
import { Image } from '11-common';
import { redirect } from '11-utils';
import './index.less';

/* eslint import/prefer-default-export: 0 */
export class SearchBar extends Component {
  render() {
    return (
      <nav className="sm-only top search-bar">
        <div
          onClick={() => {
            redirect.go('/m/auth')
          }}
          className="icon mobile menu"
        />
        <button className="clearfix">
          <Image className="icon" src="/assets/images/icons/icon_mobile_search.png" alt="search" />
          <span className="description">
            想去哪里?
          </span>
        </button>
      </nav>
    )
  }
}
