import React, { Component } from 'react';
import DesktopHouseDetail from '../../../desktop/modals/house_detail';
import MobileHouseDetail from '../../../mobile/modals/house_detail';

const HouseDetail = (props) => (
  <div>
    <DesktopHouseDetail {...props} />
    <MobileHouseDetail {...props} />
  </div>
);

export default HouseDetail;
