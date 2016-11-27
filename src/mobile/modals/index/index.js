import React, { Component } from 'react';
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
    <main>
      {
        data.map((item, index) => (
          <MobileEventItem key={index} data={item} />
        ))
      }
    </main>
  </div>
);

export default MobileIndex;
