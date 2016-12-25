import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { redirect } from '11-utils';
import Style from './index.less';

const HostMenu = {
  '/': {
    name: '房东中心',
    icon: 'user'
  },
  '/new': {
    name: '发布房源',
    icon: 'house'
  },
  '/orders': {
    name: '我的订单',
    className: 'first',
    children: {
      '/paid': '已支付',
      '/not_paid': '待支付',
      '/not_confirmed': '待确认',
      '/finished': '已完成',
      '/canceled': '已取消'
    }
  },
  '/houses': {
    name: '房源管理',
    children: {
      '/list': '房源管理',
      '/calender': '排期管理'
    }
  },
  '/comments': {
    name: '我的评价',
    children: {
      '/not_commented': '待评价',
      '/commented': '已评价'
    }
  },
  '/messages': {
    name: '我的消息',
    children: {
      '/read': '已读',
      '/unread': '未读',
      '/system': '系统消息'
    }
  },
  '/favourite': {
    name: '我的收藏',
    children: {
      '/': '收藏'
    }
  },
  '/qiuzu': {
    name: '求租需求',
    children: {
      '/quzu': "求租需求"
    }
  },
  '/tji': {
    name: '统计',
    children: {
      '/shouru': '收入统计'
    }
  },
  '/user': {
    name: '我的资料',
    children: {
      '/info': '个人资料',
      '/forget': '修改密码'
    }
  }
};

const Menu = {
  '/': {
    name: '房客中心',
    icon: 'house'
  },
  '/orders': {
    name: '我的订单',
    className: 'first',
    children: {
      '/paid': '已支付',
      '/not_paid': '待支付',
      '/not_confirmed': '待确认',
      '/finished': '已完成',
      '/canceled': '已取消'
    }
  },
  '/comments': {
    name: '我的评价',
    children: {
      '/not_commented': '待评价',
      '/commented': '已评价'
    }
  },
  '/messages': {
    name: '我的消息',
    children: {
      '/read': '已读',
      '/unread': '未读',
      '/system': '系统消息'
    }
  },
  '/favourite': {
    name: '我的收藏',
    children: {
      '/': '收藏'
    }
  },
  '/quan': {
    name: '我的优惠券',
    children: {
      '/quan': "优惠券"
    }
  },
  '/user': {
    name: '我的资料',
    children: {
      '/info': '个人资料',
      '/forget': '修改密码'
    }
  }
};

class SubMenu extends Component {
  render() {
    return (
      <ul>
        {
          <MenuItem name={this.props.title} onClick={this.props.onClick} current={this.props.current} path={this.props.parent || '/'} key={this.props.key} icon="plus" />
        }
        {
          Object.keys(this.props.list).map((key) => (
            <MenuItem key={key} path={key} onClick={this.props.onClick} current={this.props.current} parent={this.props.parent || ''} name={this.props.list[key]} />
          ))
        }
      </ul>
    )
  }
}

class MenuItem extends Component {
  static propTypes = {
    path: PropTypes.string,
    first: PropTypes.bool,
    children: PropTypes.object,
    className: PropTypes.string,
    current: PropTypes.string,
    parent: PropTypes.string,
    onClick: PropTypes.func
  };

  static defaultPropTypes = {
    parent: ''
  };

  handleClick = (path, parent) => () => {
    this.props.onClick(`${parent || ''}${path || ''}`)
  };

  render() {
    return (
      <li
        onClick={this.handleClick(this.props.path, this.props.parent)}
        className={classnames({
          item: !this.props.children,
          card: this.props.first,
          [Style.sublist]: this.props.children,
          'icon dashboard menu': this.props.icon,
          current: this.props.first ? this.props.path === this.props.current : this.props.current === `${this.props.parent || ''}${this.props.path || '/'}`,
          [this.props.icon || '']: true,
          [this.props.className || '']: true
        })}
      >
        {
          !this.props.children ? this.props.name :
            <SubMenu title={this.props.name} onClick={this.props.onClick} parent={this.props.path} current={this.props.current} list={this.props.children} />
        }
      </li>
    )
  }
}

export default class PanelMenu extends Component {
  static propTypes = {
    path: PropTypes.string,
    host: PropTypes.bool
  };

  firstSub = false;

  handleClick = (key) => {
    redirect.go(`/dashboard${this.props.host ? '/host' : ''}${key}`)
  };

  render() {
    // 根据path获取当前key值
    const current = this.props.path.replace(/^\/dashboard(\/host)?/, '');

    const menu = this.props.host ? HostMenu : Menu;

    return (
      <aside>
        <ul className={Style.list}>
          {
            Object.keys(menu).map((key, index) => (
              <MenuItem first current={current} onClick={this.handleClick} path={key} key={key} {...menu[key]} />
            ))
          }
        </ul>
      </aside>
    );
  }
}
