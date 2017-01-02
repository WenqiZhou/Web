// PC端预定页面步骤
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { BookingStatus } from '../../../../libs/enums';
import Style from './index.less';

const status = {
  1: '提交订单',
  2: '房东确认',
  3: '支付定金',
  4: '预定成功'
};

export default class DesktopBookStatus extends Component {
  static propTypes = {
    current: PropTypes.number.isRequired // 代表订单状态的code
  };

  static defaultProps = {
    current: 1
  };

  render() {
    return (
      <div className={Style.steps}>
        <ul>
          {
            Object.keys(status).map((key) => (
              <li
                className={classnames({
                  current: key <= this.props.current
                })}
                key={key}
              >
                <div className="decimal">
                  <div className={classnames({
                    number: true,
                    'before-current': key <= this.props.current,
                    'after-current': key <= Number(this.props.current) -1
                  })}>
                    {key}
                  </div>
                </div>
                <span>{status[key]}</span>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
