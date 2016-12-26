import React, { Component } from 'react';
import { connect } from 'react-redux';
import MobileIndex from '$mobile/modals/index';
import DesktopIndex from '$desktop/modals/index';
import { request } from '11-utils';
import { HOMEPAGE } from '11-store/requests/types';

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
    const props = {
      data: this.props.HOMEPAGE
    };
    return (
      <div>
        <DesktopIndex {...props} />
        <MobileIndex {...props} />
      </div>
    )
  }
}
