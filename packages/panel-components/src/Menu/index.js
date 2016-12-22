import React, { Component } from 'react';
import classnames from 'classnames';
import Style from './index.less';

export default class PanelMenu extends Component {
  render() {
    return (
      <aside>
        <ul className={Style.list}>
          <li className="item card">
            房东中心
          </li>
          <li className="item card">
            发布房源
          </li>
          <li className={classnames(Style.sublist, 'card')}>
            <ul>
              <li className="item current">
                我的订单
              </li>
              <li className="item">
                已支付
              </li>
              <li className="item">
                待支付
              </li>
              <li className="item">
                待确认
              </li>
              <li className="item">
                已完成
              </li>
              <li className="item">
                已取消
              </li>
            </ul>
            <ul>
              <li className="item">
                我的评价
              </li>
              <li className="item">
                待评价
              </li>
              <li className="item">
                已评价
              </li>
            </ul>
            <ul>
              <li className="item">
                我的消息
              </li>
              <li className="item">
                已读
              </li>
              <li className="item">
                未读
              </li>
              <li className="item">
                系统消息
              </li>
            </ul>
            <ul>
              <li className="item">
                我的收藏
              </li>
              <li className="item">
                收藏
              </li>
            </ul>
            <ul>
              <li className="item">
                我的资料
              </li>
              <li className="item">
                个人资料
              </li>
              <li className="item">
                优惠券
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    )
  }
}
