import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from '11-common';
import { UserInfo, Card, Table } from '11-panel';
import Menu from './menu';
import Style from './index.less';

const { UserInfo: Info, OrderList } = require('../../../../libs/mock');

@connect((__, { location }) => {
  return {
    host: location.pathname.match(/^\/dashboard\/host/),
    path: location.pathname
  }
})
export default class Orders extends Component {
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
      render: () => {
        return (
          <div>
            <p>取消订单</p>
            <p>联系房东</p>
          </div>
        )
      }
    }
  ];

  render() {
    return (
      <div>
        {
          !this.props.host ? <Row><UserInfo data={Info.user} /></Row> : ''
        }
        <Row>
          <Card
            wrapperClassName={Style.card}
            title={<Menu host={this.props.host} current={this.props.params.type || '/'} />}
          >
            <Table className={Style.table} columns={this.columns} dataSource={OrderList} />
          </Card>
        </Row>
      </div>
    )
  }
}
