// 评价
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from '11-common';
import { Card, BrandNav } from '11-panel';
import OrderStyle from '../../order/index.less';

@connect((__, { location }) => {
  return {
    host: location.pathname.match(/^\/dashboard\/host/)
  }
})
export default class Comment extends Component {
  render() {
    return (
      <div>
        <Row>
          <BrandNav list={[`我是${this.props.host ? '房东' : '房客'}`, '我的评价', '我的评价', '待评价']} />
        </Row>
        <Row>
          <Card>
            <div className={OrderStyle.title}>
              预订信息（订单号：34234343）
              <span className="right">下单时间：2016-04-01 16:38:01</span>
            </div>
          </Card>
        </Row>
      </div>
    )
  }
}
