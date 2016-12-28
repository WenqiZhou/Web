import React, { Component, PropTypes } from 'react';
import { Image, Row, Col } from '11-common';
import 'node.date-time';
import Style from './index.less';
import { BookingStatus } from '../../../../libs/enums';

export const OrderHouseName = ({ text, row }) => (
  <Row className={Style.name}>
    <Col className={Style.img}>
      <Image src={`${row.landlord.head_url}_750`} />
    </Col>
    <Col className={Style.right}>
      <p className={Style.title}>
        {row.house_info.title}
      </p>
      <p className={Style.time}>
        {new Date(row.create_time).format("Y-MM-dd HH:mm:SS")}
      </p>
    </Col>
  </Row>
);

export const OrderId = ({ text }) => (
  <span className={Style.id}>
    {text}
  </span>
);

export const OrderTimes = ({ row }) => (
  <div className={Style.list}>
    <p>{row.instance_num}间*{new Date(row.leaving_date - row.entering_date).getDate()}天</p>
    <p>入住时间：{new Date(row.entering_date).format('Y-MM-dd')}</p>
    <p>退房时间：{new Date(row.leaving_date).format('Y-MM-dd')}</p>
  </div>
);

export const Money = ({ text }) => (
  <span>¥{text}元</span>
);

export const Status = ({ text }) => (
  <div className={Style.list}>
    <p>{(BookingStatus[text] || {}).name}</p>
    <p>订单详情</p>
  </div>
);

export const Actions = ({text}) => (
  <div className={Style.list}>
    <p>取消订单</p>
    <p>联系房东</p>
  </div>
);
