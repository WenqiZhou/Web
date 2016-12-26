// 我的评价列表
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, BrandNav } from '11-panel';
import { Row } from '11-common';
import ListItem from './ListItem';
import Style from './index.less';

const { CommentsList: List } = require('../../../../libs/mock');

@connect((__, { location }) => {
  return {
    host: location.pathname.match(/\/host\//)
  }
})
export default class CommentsList extends Component {
  render() {
    return (
      <div>
        <Row>
          <BrandNav list={['房东中心', '我的评价', '对我的评价']} />
        </Row>
        <Row>
          <Card className={Style.list} title="房客评价（123条）">
            {
              List.map((item, index) => <ListItem key={index} data={item} />)
            }
          </Card>
        </Row>
      </div>
    )
  }
}
