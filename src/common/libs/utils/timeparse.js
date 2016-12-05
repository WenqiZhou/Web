// 时间解析相关的类
import moment from 'moment';
import 'moment/locale/zh-cn';
import { CancellationPolicies } from '../../../../libs/enums';

const getTime = (time) => {
  if (!time || time < 0 || time === 100000) {
    return '灵活';
  }

  return moment(time).format('A H:mm');
};

export const enterTime = ({ enter_time }) => getTime(enter_time);

export const leaveTime = ({ leaving_time }) => getTime(leaving_time);

export const getCp = ({ cp }) => CancellationPolicies[cp] || CancellationPolicies[0];
