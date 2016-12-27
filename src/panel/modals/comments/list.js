// 我的评价列表
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, BrandNav, Empty } from '11-panel';
import { Row } from '11-common';
import { request } from '11-utils';
import { COMMENT_LIST } from '11-store/requests/types';
import ListItem from './ListItem';
import Style from './index.less';

@connect(({ Request }, { location }) => {
  const comments = (Request[COMMENT_LIST] || {}).data || {};
  return {
    list: comments.comments || [],
    lastId: comments.last_id,
    loading: Request.loading,
    host: location.pathname.match(/\/host\//)
  }
})
export default class CommentsList extends Component {
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    request({
      key: COMMENT_LIST
    });
  };

  render() {
    return (
      <div>
        <Row>
          <BrandNav list={[`我是${this.props.host ? '房东' : '房客'}`, '我的评价', '对我的评价']} />
        </Row>
        <Row>
          <Card className={Style.list} title={`${this.props.host ? '房客' : '房东'}评价（${this.props.list.length}条）`}>
            <Empty title="您还没有收到房东对您的评价哦！">
              {
                this.props.list.filter(({ status }) => status === (this.props.host ? 3 : 2)).map((item, index) =>
                  <ListItem key={index} data={item} />)
              }
            </Empty>
          </Card>
        </Row>
      </div>
    )
  }
}
