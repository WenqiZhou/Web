import React, { Component } from 'react';
import { redirect } from '11-utils';
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
  <div className="mobile index sm-only">
    <SearchBar />
    <main>
      {
        data.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              redirect.go('/s')
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
