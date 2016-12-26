import React, { Component } from 'react';
import classnames from 'classnames';
import { Card, BrandNav } from '11-panel';
import { Row } from '11-common';
import Style from './index.less';

export default class OrderDetail extends Component {
  render() {
    return (
      <div className={Style.order}>
        <Row>
          <BrandNav list={['我是房客', '我的订单', '订单管理', '订单详情']} render="&nbsp;>&nbsp;" />
        </Row>
        <Row style={{ margin: '-.08rem 0 .27rem' }}>
          <Card className={Style.status}>
            当前订单状态：已完成
            <span className="right">取消订单</span>
          </Card>
        </Row>
        <Row>
          <Card className={Style.detail}>
            <div className={Style.title}>
              预订信息（订单号：34234343）
              <span className="right">下单时间：2016-04-01 16:38:01</span>
            </div>
            xxxx
          </Card>
        </Row>
        <Row>
          <Card className={Style.detail}>
            <div className={classnames(Style.title)}>
              订单总额
              <span className="right orange">¥242</span>
            </div>
            <div className={classnames(Style.title, 'normal')}>
              房租：
              <span className="right orange">¥142</span>
            </div>
            <div className={classnames(Style.title, 'normal')}>
              押金：
              <span className="right orange">¥100</span>
            </div>
          </Card>
        </Row>
        <Row>
          <Card className={Style.detail}>
            <div className={classnames(Style.title)}>
              预定人信息
            </div>
            <div style={{ lineHeight: '.6rem' }} className={classnames(Style.title, 'normal')}>
              <dl>
                <dt>预定人</dt>
                <dd>赵铁柱</dd>
                <dt>手机号</dt>
                <dd>15632324455</dd>
                <dt>身份证</dt>
                <dd>11044545156</dd>
              </dl>
            </div>
          </Card>
        </Row>
        <Row>
          <Card className={Style.detail}>
            <div className={classnames(Style.title)}>
              退订政策
              <span className="orange right">适中</span>
            </div>
            xxx
          </Card>
        </Row>
      </div>
    )
  }
}
