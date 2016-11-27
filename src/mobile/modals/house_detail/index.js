import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goBack } from '../../../common/libs/utils';
import { request } from '../../../common/libs/request';
import { HouseDetail } from '../../../common/store/requests/types';
import '../../style/house_detail.less';

@connect(({ Request }) => {
  console.log(Request)
  return {};
})
export default class MobileHouseDetail extends Component {
  componentWillMount() {
    request({
      key: HouseDetail,
      params: {
        id: this.props.params.id
      }
    })
  }

  render() {
    return (
      <div className="house detail">
        123
      </div>
    );
  }
}
