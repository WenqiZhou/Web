import React, { Component } from 'react';
import { go } from '../../../common/libs/utils/utils';
import { SearchBar } from '../../components/Navigation';
import Items from '../../components/IndexItem'
import { EventType } from '../../../../libs/enums';

const MobileEventItem = (props) => {
  return React.createElement(
    Items[`${EventType[props.data.type].replace(/_/g, '')}Item`],
    props
  );
};

const MobileIndex = ({ data = [] }) => (
  <div className="mobile index">
    <SearchBar />
    <main>
      {
        data.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              go('/s')
            }}
          >
            <MobileEventItem data={item} />
          </div>
        ))
      }
    </main>
  </div>
);

export default MobileIndex;
