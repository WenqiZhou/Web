import React, { Component, PropTypes } from 'react';
import { Image, Row, Col } from '11-common';
import { Avatar } from '11-panel';
import 'node.date-time';
import Style from './index.less';

export default class ListItem extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    const { data } = this.props;
    const content = data.by_tenant || data.by_landlord;
    const commiter = content.type === '1' ? '房东' : '房客'
    ''

    return (
      <Row className={Style.item}>
        <Col span={4} className={Style.avatar}>
          <Avatar url={`${content.user.head_url}_750`} />
          <p>
            {content.user.real_name}
          </p>
        </Col>
        <Col span={20}>
          <div className={Style.content}>
            <p>被房源：<span className="orange">火车站附近4人－6人复式公寓房 </span>的{commiter}评价：</p>
            <p>{content.content}</p>
            <p className="gray">{content.type === '1' ? '房东' : '房客'}点评时间：{new Date(content.create_time).format('Y.MM.dd')}</p>
          </div>
        </Col>
      </Row>
    )
  }
}
