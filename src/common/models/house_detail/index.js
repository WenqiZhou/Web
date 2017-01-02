import React, { Component } from 'react';
import { connect } from 'react-redux';
import DesktopHouseDetail from '$desktop/models/house_detail';
import DesktopHouseBook from '$desktop/models/book';
import MobileHouseDetail from '$mobile/models/house_detail';
import { request } from '11-utils';
import { HOUSE_DETAIL } from '../../../common/store/requests/types';

@connect(({ Request }, { location }) => {
  return {
    loading: Request.loading,
    path: location.pathname,
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

    if (this.props.path.match(/\/book\//)) {
      return (
        <DesktopHouseBook {...props} />
      )
    }

    return (
      <div>
        <DesktopHouseDetail {...props} />
        <MobileHouseDetail {...props} />
      </div>
    );
  }
}
