import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchBar } from '../../components/Headers';
import { EventType } from '../../../../libs/enums';
import { request } from '../../../common/libs/request';
import { HOMEPAGE } from '../../../common/store/requests/types';
import Items from '../../components/IndexItem'

const MobileEventItem = (props) => React.createElement(
  Items[`${EventType[props.data.type].replace(/_/, '')}Item`],
  props
);


@connect(({ request: req }) => {
  return {
    HOMEPAGE: ((req.HOMEPAGE || {}).data || {}).items || []
  };
})
export default class MobileIndex extends Component {
  componentDidMount() {
    request({
      key: HOMEPAGE
    });
  }

  render() {
    return (
      <div className="mobile index">
        <SearchBar />
        <main>
          {
            this.props.HOMEPAGE.map((item, index) => (
              <MobileEventItem key={index} data={item} />
            ))
          }
        </main>
      </div>
    );
  }
}
