import React, { Component, PropTypes } from 'react';
import { Image, Row, Col } from '11-common';
import { Avatar } from '11-panel';
import Style from './index.less';

export default class ListItem extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    const { data } = this.props;
    return (
      <Row className={Style.item}>
        <Col span={4} className={Style.avatar}>
          <Avatar url="http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/b2b07126-9b31-11e6-8697-02355002f52f.u_750" />
          <p>
            名字名字名字名字名字名字
          </p>
        </Col>
        <Col span={20}>
          <div className={Style.content}>
          content
          </div>
        </Col>
      </Row>
    )
  }
}
