import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { request } from '11-utils';
import { BOOKING_DETAIL } from '11-store/requests/types';
import { Card, BrandNav } from '11-panel';
import { Row, Col, Image } from '11-common';
import 'node.date-time';
import Style from './index.less';
import { BookingStatus, HouseType } from '../../../../libs/enums';

@connect((Request) => {
  return {
    loading: Request.loading
  }
})
export default class OrderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: { landlord: {}, house_info: {}, tenant: {} }
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.setState({
      loading: true
    });
    request({
      key: BOOKING_DETAIL,
      params: {
        id: this.props.params.id
      },
      callback: (response) => {
        this.setState({
          loading: false
        });
        if (response.ret === 0) {
          this.setState({
            data: response.booking_info
          });
        } else {
          alert('请求失败');
        }
        return request;
      }
    });
  };

  render() {
    return (
      <div className={Style.order}>
        <Row>
          <BrandNav list={['我是房客', '我的订单', '订单管理', '订单详情']} render="&nbsp;>&nbsp;" />
        </Row>
        <Row style={{ margin: '-.08rem 0 .27rem' }}>
          <Card className={Style.status}>
            当前订单状态：<span className="orange">{(BookingStatus[this.state.data.status] || {}).name}</span>
            <span className="right">取消订单</span>
          </Card>
        </Row>
        <Row>
          <Card className={Style.detail}>
            <div className={Style.title}>
              预订信息（订单号：{this.props.params.id}）
              <span className="right">下单时间：{new Date(Number(`${this.state.data.create_time}000`)).format('Y-MM-dd HH:mm:SS')}</span>
            </div>
            <Row className={Style.info}>
              <Col className={Style.img}>
                <Image src={`${this.state.data.landlord.head_url}_750`} />
              </Col>
              <Col className={Style.desc}>
                <p className="title">{this.state.data.house_info.title}</p>
                <p>房间地址：{this.state.data.house_info.city}{this.state.data.house_info.baidu_district}{this.state.data.house_info.address}</p>
                <p>{new Date(this.state.data.entering_date).format('Y-MM-dd')}至{new Date(this.state.data.leaving_date).format('Y-MM-dd')}－共{new Date(this.state.data.leaving_date - this.state.data.entering_date).getDate()}晚 {HouseType[this.state.data.house_info.house_type]}－{this.state.data.guest_num}位</p>
                <p className="landlord">房东：{this.state.data.landlord.real_name} <a>联系房东</a></p>
              </Col>
            </Row>
          </Card>
        </Row>
        <Row>
          <Card className={Style.detail}>
            <div className={classnames(Style.title)}>
              订单总额
              <span className="right orange">¥ {this.state.data.cash_fee}</span>
            </div>
            <div className={classnames(Style.title, 'normal')}>
              房租：
              <span className="right orange">¥ {this.state.data.total_price}</span>
            </div>
            <div className={classnames(Style.title, 'normal')}>
              押金：
              <span className="right orange">¥ {this.state.data.deposit_fee || 0}</span>
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
                <dd>{this.state.data.tenant.real_name}</dd>
                <dt>手机号</dt>
                <dd>{this.state.data.tenant.phone}</dd>
                <dt>身份证</dt>
                <dd>{this.state.data.tenant.idcard}</dd>
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
