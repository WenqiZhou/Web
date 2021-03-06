import React, { Component, PropTypes } from 'react';
import { request } from '11-utils';
import Requests from '11-store/requests';
import Item from './item';
import './index.less';

const ThirdLogins = {
  wechat: 2,
  qq: 5,
  weibo: 4,
  alipay: 3
};

export default class ThirdLogin extends Component {
  static propTypes = {
    redirect: PropTypes.string,
    mobile: PropTypes.bool
  };

  onClick = (type) => () => {
    const profile = Requests.SignUp;
    console.log(profile, this.props.redirect);
  };

  render() {
    return (
      <ul className="third-login">
        {
          Object.keys(ThirdLogins).map((key) => (
            <Item key={key} mobile={this.props.mobile} type={key} onClick={this.onClick(key)} />
          ))
        }
      </ul>
    )
  }
}
