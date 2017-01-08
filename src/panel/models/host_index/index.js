// 房东端首页
import React, { Component } from 'react';
import { Card, UserInfo } from '11-panel';
import { Row, Col } from '11-common';
import Style from './index.less';

const { UserInfo: Info } = require('../../../../libs/mock');

export default class HostIndex extends Component {
  render() {
    return (
      <div className={Style.index}>
        <Row>
          <UserInfo data={Info.user} />
        </Row>
        <Row space={9}>
          <Col span={8}>
            <Card title="订单管理" className={Style.content}>
              <ul>
                <li><span>1</span> 个待确认订单</li>
                <li><span>1</span> 个待支付订单</li>
                <li><span>1</span> 个待入住订单</li>
                <li><span>1</span> 个取消订单</li>
                <li><span>1</span> 个过期订单</li>
              </ul>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="评价管理" className={Style.content}>
              <ul>
                <li><span>1</span> 条房客评价需完成</li>
                <li><span>1</span> 条房东评价需完成</li>
              </ul>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="统计" className={Style.content}>
              <p>您已经获得了 <span>1</span> 个订单和 <span>1295 </span>元的收入</p>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
