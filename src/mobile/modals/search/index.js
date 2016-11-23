import React, { Component } from 'react';
import { connect } from 'react-redux';
import { request } from '../../../common/libs/request';
import { SEARCH } from '../../../common/store/requests/types';
import HouseList from '../../components/HouseList';
import '../../style/search.less';

@connect(({ search, Request }) => {
  return {
    traceID: search.traceID,
    lastID: search.lastID,
    SEARCH: ((Request.SEARCH || {}).data || {}).houses || []
  }
})
export default class MobileSearch extends Component {
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
    return (
      <div className="mobile search">
        <div className="results">
          <HouseList data={this.props.SEARCH} />
          <button className="filter button">
            筛选条件
          </button>
        </div>
      </div>
    )
  }
}
