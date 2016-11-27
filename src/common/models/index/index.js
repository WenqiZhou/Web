import React, { Component } from 'react';
import { connect } from 'react-redux';
import MobileIndex from '$mobile/modals/index';
import DesktopIndex from '$desktop/modals/index';
import { request } from '../../../common/libs/request';
import { HOMEPAGE } from '../../../common/store/requests/types';

@connect(({ Request, ...stores }) => {
  return {
    HOMEPAGE: ((Request.HOMEPAGE || {}).data || {}).items || []
  };
})
export default class Index extends Component {
  componentDidMount() {
    request({
      key: HOMEPAGE
    });
  }
  render() {
    return (
      <div>
        <DesktopIndex data={this.props.HOMEPAGE} />
        <MobileIndex data={this.props.HOMEPAGE} />
      </div>
    )
  }
}
