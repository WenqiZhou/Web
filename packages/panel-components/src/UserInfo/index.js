import React, { PropTypes } from 'react';
import Card from '../Card';
import Style from './index.less';
import { confuseMobile } from '../../../../libs/patterns';

const UserInfo = ({ data }) => (
  <Card className={Style.info}>
    <div className="avatar">
      <img src={`${data.head_url}_750`} alt={data.real_name} />
    </div>
    <div className="information">
      <p>
        <strong>{data.real_name}{data.real_name}{data.real_name}{data.real_name}{data.real_name}</strong>
        <span>下午好！</span>
      </p>
      <p>手机号：{confuseMobile(data.phone)}</p>
      <div>
        <p>资料完善度：</p>
        <a>立即完善</a>
      </div>
    </div>
    <div className="messages">
      <div>
        <p><strong>我的消息</strong></p>
        <p>暂时没有新消息呢～</p>
      </div>
      <a>邀请好友>></a>
    </div>
  </Card>
);

UserInfo.propTypes = {
  data: PropTypes.object
};

export default UserInfo;
