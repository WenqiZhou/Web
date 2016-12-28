import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from '11-common';
import { UserInfo, Card, Table, OrdersListItem } from '11-panel';
import { request } from '11-utils';
import { BOOKING_LIST } from '11-store/requests/types';
import Menu from './menu';
import Style from './index.less';
import { BookingTypes } from '../../../../libs/enums';

@connect(({ Request, user }, { location, params }) => {
  const list = (Request[BOOKING_LIST] || {}).data || {};
  return {
    user,
    lastId: list.last_create_time,
    list: list.booking_info || [],
    host: location.pathname.match(/^\/dashboard\/host/),
    path: location.pathname,
    current: params.type || '/'
  }
})
export default class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.list,
      last: false,
      loading: false
    };
  }

  componentDidMount() {
    this.getData()();
  }

  componentWillReceiveProps(np) {
    if (np.current !== this.props.current) {
      this.getData(true, np.current)();
      return;
    }
    if (np.type !== this.lastType) {
      this.setState({
        last: false,
        list: np.list
      });
      this.lastType = np.current;
      return;
    }
    if (np.lastId !== this.props.lastId) {
      this.setState({
        list: [].concat(this.state.list, np.list),
        last: false
      })
    } else {
      this.setState({
        last: true
      });
    }
  }

  getData = (first = true, type = this.props.current) => () => {
    if ((first === false && !this.props.lastId) || this.props.loading) return;
    request({
      key: BOOKING_LIST,
      query: {
        bt: BookingTypes[type]
      }
    });
  };

  lastType = '';

  columns = [
    {
      title: '房源',
      key: 'name',
      dataSource: 'name',
      width: '3.63rem',
      render: (text, row) => (
        <OrdersListItem.OrderHouseName text={text} row={row} />
      )
    },
    {
      title: '订单号',
      key: 'id',
      width: '1.39rem',
      dataSource: 'booking_id',
      render: (text) => (
        <OrdersListItem.OrderId text={text} />
      )
    },
    {
      title: '时间',
      key: 'time',
      dataSource: 'time',
      width: '2.26rem',
      render: (text, row) => (
        <OrdersListItem.OrderTimes row={row} />
      )
    },
    {
      title: '金额',
      key: 'cash_fee',
      width: '.89rem',
      dataSource: 'cash_fee',
      render: (text) => (
        <OrdersListItem.Money text={text} />
      )
    },
    {
      title: '状态',
      key: 'status',
      width: '.87rem',
      dataSource: 'status',
      render: (text) => (
        <OrdersListItem.Status text={text} />
      )
    },
    {
      title: '操作',
      key: 'actions',
      width: '1.11rem',
      render: (text) => (
        <OrdersListItem.Actions text={text} />
      )
    }
  ];

  render() {
    return (
      <div>
        {
          !this.props.host ? <Row><UserInfo data={this.props.user.user} /></Row> : ''
        }
        <Row>
          <Card
            wrapperClassName="menu-title"
            title={<Menu host={this.props.host} current={this.props.current} />}
          >
            <Table className={Style.table} columns={this.columns} dataSource={this.state.list} />
          </Card>
        </Row>
      </div>
    )
  }
}
