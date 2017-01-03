import React, { Component } from 'react';
import classnames from 'classnames';
import { Nav, BookStatus } from '11-desktop';
import { Row, Col, Form, Input, Image, Avatar } from '11-common';
import { Card } from '11-panel';
import os from 'node.os';
import { redirect } from '11-utils';
import SectionTitle from './section-title';
import Style from './index.less';

export default class DesktopBook extends Component {
  componentWillMount() {
    if (os.isAndroid || os.isIOS) {
      redirect.redirect(`/house/${this.props.id}`);
    }
  }

  render() {
    const { data } = this.props;
    const { query } = this.props.location;
    const { images = [], landlord = {} } = data;
    console.log(data, landlord, this.props)
    return (
      <div className={classnames('lg-only', Style.book)}>
        <Nav search black className={classnames(Nav.Style.index, 'dashboard')} />
        <BookStatus />
        <div className={Style.container}>
          <Row>
            <Col className={Style.left}>
              <Card className={Style.root}>
                <Card
                  className={Style['enter-info']}
                  basic
                  title={<SectionTitle>入住信息</SectionTitle>}
                >
                  <ul>
                    <li>
                      <p className="label">
                        入住时间
                      </p>
                      <Input />
                    </li>
                    <li>
                      <p className="label">
                        退房时间
                      </p>
                      <Input />
                    </li>
                    <li>
                      <p className="label">
                        入住人数
                      </p>
                      <Input />
                    </li>
                  </ul>
                </Card>
                <Card
                  basic
                  title={
                    <SectionTitle>
                      预定人信息 <span className="subtitle">选择常用入住人: <input type="checkbox" /></span>
                    </SectionTitle>
                  }
                >
                  123
                </Card>
                <Card
                  basic
                  title={<SectionTitle>优惠券</SectionTitle>}
                >
                  123
                </Card>
                <Card
                  basic
                  title={<SectionTitle>保险</SectionTitle>}
                >
                  123
                </Card>
                <Card
                  basic
                  title={<SectionTitle>退订政策</SectionTitle>}
                >
                  123
                </Card>
              </Card>
            </Col>
            <Col className={Style.right}>
              <Card>
                <div className="image">
                  <Image src={`${(images[0] || {}).image_url}_750`} />
                  <Avatar className={Style.avatar} url={landlord.head_url} />
                </div>
                <div className={Style.content}>
                  <div className="title">
                    {data.title}
                  </div>
                  <p>
                    <span>1 位房客</span>
                    <span>预定1间</span>
                  </p>
                  <Row className="time">
                    <Col>
                      <p>
                        <span>入住时间</span>
                        <span>2016-6-3</span>
                      </p>
                      <p>
                        <span>退房时间</span>
                        <span>2016-6-3</span>
                      </p>
                    </Col>
                    <Col className="right">
                      <p>共<span className="orange">2</span>晚</p>
                    </Col>
                  </Row>
                </div>
              </Card>
              <Card className={Style.count}>
                订单总额<span className="orange"><span className="unit">¥</span>452</span>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
