import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from '11-common';
import { Card, Table, BrandNav } from '11-panel';
import { redirect } from '11-utils';
import Menu from './menu'
import Style from './index.less';

const { UserInfo: Info, OrderList } = require('../../../../libs/mock');

@connect((__, { location }) => {
  return {
    host: location.pathname.match(/^\/dashboard\/host/),
    path: location.pathname
  }
})
export default class CommentStatus extends Component {
  goComment = (id) => () => {
    redirect.go(`/dashboard/comments/${this.props.host ? 'host/' : ''}comment/${id}`)
  };

  columns = [
    {
      title: '房源',
      key: 'name',
      dataSource: 'name',
      width: '3.63rem',
      render: (text, row) => {
        return text
      }
    },
    {
      title: '订单号',
      key: 'id',
      width: '1.09rem',
      dataSource: 'id'
    },
    {
      title: '时间',
      key: 'time',
      dataSource: 'time',
      width: '2.26rem',
      render: () => {
        return (
          <div>
            <p>1间*1天</p>
            <p>入住时间：2016-06-22</p>
            <p>退房时间：2016-06-23</p>
          </div>
        )
      }
    },
    {
      title: '金额',
      key: 'money',
      width: '.89rem',
      dataSource: 'money'
    },
    {
      title: '状态',
      key: 'status',
      width: '.87rem',
      dataSource: 'status'
    },
    {
      title: '操作',
      key: 'actions',
      dataSource: 'id',
      render: (id) => {
        return (
          <div>
            <p><a onClick={this.goComment(id)}>评价</a></p>
            <p>删除订单</p>
            <p>联系房东</p>
          </div>
        )
      }
    }
  ];

  render() {
    return (
      <div>
        <Row>
          <BrandNav list={[`我是${this.props.host ? '房东' : '房客'}`, '我的评价', this.props.params.type === 'commented' ? '已评价' : '待评价']} />
        </Row>
        <Row>
          <Card
            wrapperClassName="menu-title"
            title={<Menu host={this.props.host} current={this.props.params.type || '/'} />}
          >
            <Table className={Style.table} columns={this.columns} dataSource={OrderList} />
          </Card>
        </Row>
      </div>
    );
  }
}
