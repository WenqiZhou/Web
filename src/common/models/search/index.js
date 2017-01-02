import React, { Component } from 'react';
import { connect } from 'react-redux';
import { request } from '11-utils';
import DesktopSearch from '../../../desktop/models/search';
import MobileSearch from '../../../mobile/models/search';
import { SEARCH } from '../../store/requests/types';

@connect(({ search, Request }) => {
  return {
    traceID: search.traceID,
    lastID: search.lastID,
    SEARCH: ((Request.SEARCH || {}).data || {}).houses || []
  }
})
export default class RoomSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = (querys) => {
    request({
      key: SEARCH,
      query: {
        last_id: this.props.lastID
        // 需要一个lib解析url中的参数并附带上去
        // 需要一个公用的规则解析所有的地址参数
        // lib需要能直接与请求对应
      }
    });
  };

  render() {
    const props = {
      list: this.props.SEARCH
    };
    return (
      <div>
        <DesktopSearch {...props} />
        <MobileSearch {...props} />
      </div>
    )
  }
}

