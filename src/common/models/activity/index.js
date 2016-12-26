import React, { Component } from 'react';
import { connect } from 'react-redux';
import DesktopHouseActivity from '$desktop/modals/activity';
import MobileHouseActivity from '$mobile/modals/activity';
import { request } from '11-utils';
import { HOUSE_DETAIL } from '../../../common/store/requests/types';

@connect(({ Request }) => {
  return {
    loading: Request.loading,
    HOUSE_DETAIL: (Request.HOUSE_DETAIL || {}).data || {}
  };
})
export default class HouseDetail extends Component {
  componentWillMount() {
    this.getData();
  }

  getData = () => {
    request({
      key: HOUSE_DETAIL,
      params: {
        id: this.props.params.id
      }
    });
  };

  render() {
    const data = this.props.HOUSE_DETAIL[this.props.params.id] || {};
    const props = {
      data: data.house || {},
      similar: data.similar || {}
    };

    return (
      <div>
        <DesktopHouseActivity {...props} />
        <MobileHouseActivity {...props} />
      </div>
    );
  }
}
