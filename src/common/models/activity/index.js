import React, { Component } from 'react';
import { connect } from 'react-redux';
import DesktopHouseActivity from '$desktop/models/activity';
import MobileHouseActivity from '$mobile/models/activity';
import { request } from '11-utils';
import { SEARCH } from '../../../common/store/requests/types';

@connect(({ search, Request }) => {
  return {
    loading: Request.loading,
    SEARCH: (Request.SEARCH || {}).data || {}
  };
})
export default class ActivityDetail extends Component {
  componentWillMount() {
    this.getData();
  }

  getData = () => {
    request({
      key: SEARCH,
      query: {
        ai: this.props.params.id
      }
    });
  };

  render() {
    const { activity_share, ains } = this.props.SEARCH;
    const props = {
      activity_share, ains
    };

    return (
      <div>
        <DesktopHouseActivity {...props} />
        <MobileHouseActivity {...props} />
      </div>
    );
  }
}
