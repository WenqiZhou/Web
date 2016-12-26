// 验证码发送组件,不包含样式,只有接口与状态,只负责验证码发送,没有输入
// 提供一个onSend 属性供回调使用,返回成功/失败
// onCountFinish 倒计时结束的回调
// 如果要从外部主动调用发送信号,可以使用emitCallback方法获取发送方法
// 使用async sendAction方法自定义发送
// 注意: 必须使用getMobile参数获取爷爷组件的手机号(可能使用redux更好 但是好像会污染redux数据链 不优雅)
// 考虑到以后需求方修改的兼容性,因此使用回调进行所有操作,而没有使用async
import React, { Component, PropTypes, cloneElement } from 'react';
import classnames from 'classnames';
import { fetch, Requests } from '11-utils';

export default class Code extends Component {
  static propTypes = {
    className: PropTypes.string,
    onSend: PropTypes.func,
    emitCallback: PropTypes.func,
    onCountFinish: PropTypes.func,
    sendAction: PropTypes.func,
    getMobile: PropTypes.func,
    children: PropTypes.node
  };

  constructor(props) {
    super(props);
    if (props.sendAction) {
      this.sendAction = props.sendAction;
    }

    this.state = {
      count: null,
      mobile: null,
      sended: false,
      sending: false
    }
  }

  // 组件渲染完成以后,回调调用发送的函数给上级组件
  componentDidMount() {
    if (this.props.emitCallback) {
      this.props.emitCallback(this.handleClick);
    }
  }

  componentWillReceiveProps() {
    this.setState({
      mobile: this.props.getMobile()
    });
  }

  // 在组件即将注销时取消倒计时
  componentWillUnmount() {
    this.clearCountdown();
  }

  interval = null;

  clearCountdown = () => {
    if (this.interval) {
      window.clearInterval(this.interval);
      this.setState({
        count: null
      });
    }
  };

  countdown = (start) => () => {
    if (this.state.count && this.state.count <= 1) {
      this.clearCountdown();
      if (this.props.onCountFinish) {
        this.props.onCountFinish();
      }
      return;
    }
    this.setState({
      count: (this.state.count || start) - 1
    });
  };

  initCountdown = (start) => {
    this.clearCountdown();
    this.interval = window.setInterval(this.countdown(start), 1000)
  };

  // 发送成功的回调
  handleSended = (result, error) => {
    if (this.props.onSend) {
      this.props.onSend(result, error)
    }
    this.sendCallback(result);
  };

  sendCallback = (success, countStart = 10) => {
    // 如果success,需要开始倒计时
    this.setState({
      sending: false,
      sended: true
    });
    if (success) {
      this.initCountdown(countStart);
    }
  };

  // 发送验证码的操作方法,通过callback方法发送成功回调
  // 可以用props.sendAction重写
  sendAction = (type, callback, phone = this.state.mobile) => {
    if (this.state.sending || this.state.count > 0) {
      return;
    }
    if (!phone) {
      this.handleSended(false, '请输入手机号');
      return;
    }
    phone = String(phone);
    if (!phone.match(/^1[3|4|5|7|8][0-9]\d{4,8}$/)) {
      this.handleSended(false, '手机号输入错误');
      return;
    }
    this.setState({
      sending: true,
      sended: false
    });
    const profile = Requests.GetVerificationCode;
    fetch(profile.path, {
      ...profile,
      body: JSON.stringify({
        msg_type: type,
        phone
      })
    }).then(response => {
      if (response.ret === 0) {
        this.handleSended(true);
      } else {
        this.handleSended(false, response.err);
      }
    })
  };

  /**
   * 发送验证码的最终调用
   * @param type 验证码类型
   */
  handleClick = (type) => () => {
    this.sendAction(type, this.sendCallback)
  };

  render() {
    return (
      <div
        className={
          classnames({
            'varify-code': true,
            [this.props.className]: true
          })
        }
      >
        {
          cloneElement(this.props.children, {
            onClick: this.handleClick(1),
            disabled: this.state.sending || this.state.count !== null,
            children: (() => {
              const defaultStr = '发送验证码';
              const countStr = (time) => `(${time}s)重新获取`;

              if (this.state.count !== null) {
                return countStr(this.state.count);
              }
              return defaultStr;
            })()
          })
        }
      </div>
    );
  }
}
