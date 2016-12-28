/* eslint import/prefer-default-export: 0 */
export const EventType = {
  0: 'START_TYPE',
  1: 'ACTIVITY_TYPE', // 热门城市
  2: 'SEARCH_TYPE',
  3: 'HOUSE_TYPE', // 房源
  5: 'INVITE_TYPE', // 邀请
  6: 'ACTIVITY_NEW_TYPE', // 主题
  7: 'END_TYPE'
};

export const EventTypeDescription = {
  1: {
    name: '热门城市',
    description: '寻找你未曾相遇的风景'
  },
  2: {},
  3: {
    name: '热门推荐',
    description: '发现你和世界的另一面'
  },
  5: {},
  6: {
    name: '精彩主题',
    description: '寻找你所喜爱的'
  }
};

// export const BigHouseType = {
//   NONE        = 0;
//   APARTMENT   = 1; // 公寓
//   VILLA       = 2; // 别墅
// }
//
// export const CommentVisibleType = {
//   DEFUALT     = 0;
//   VISIBLE     = 1; // 可见
//   INVISIBLE   = 2; // 不可见
// }
//

export const HouseType = {
  0: '整套房子',
  1: '整套房子',
  2: '独立房间',
  3: '床位出租'
};

export const LandLordDesc = {
  new_verified_id: '实名认证',
  is_landlord: '个人房东',
  landlord_verified: '认证房东'
};

export const CancellationPolicies = {
  0: '灵活',
  1: '灵活',
  2: '适中',
  4: '严格'
};

export const BedsTypes = {
  1: '双人床', // 已废弃
  2: '单人床', // 已废弃
  3: '沙发',
  4: '单人床(宽0.9米左右)',
  5: '单人床(宽1.2米左右)',
  6: '双人床(宽1.5米左右)',
  7: '双人床(宽1.8米左右)',
  8: '双层床',
  9: '充气床',
  10: '圆床',
  11: '双人床(宽2.0米左右)',
  12: '双人沙发',
  13: '儿童床',
  14: '婴儿床',
  15: '榻榻米',
  16: '炕床'
};

// 评论是否可见
export const CommentVisibleType = {
  0: 'DEFUALT',
  1: 'VISIBLE', // 可见
  2: 'INVISIBLE' // 不可见
};

// 订单状态
export const BookingStatus = {
  0: {
    key: 'START_STATUS',
    name: '开始状态',
    description: '开始状态 非流程状态 接口调用者不用关注'
  },
  1: {
    key: 'SUBMITED_AND_WAITING_FOR_CONFIRMATION',
    name: '待确认',
    description: '租客已经提交，等待房东确认'
  },
  2: {
    key: 'CONFIRMED_AND_WAITING_FOR_PAYMENT',
    name: '待支付',
    description: '房东已经确认，等待租客支付'
  },
  3: {
    key: 'TENANT_CONFIRM_TO_PAY',
    name: '确认支付',
    description: '租客确认支付，等待支付成功'
  },
  4: {
    key: 'PAYED_SUCCESS',
    name: '已支付',
    description: '租客已经支付，等待入住'
  },
  5: {
    key: 'CANCEL_BOOKING',
    name: '已取消',
    description: '租客取消订单'
  },
  6: {
    key: 'LOANLORD_REJECT',
    name: '已拒绝',
    description: '房东拒绝订单'
  },
  7: {
    key: 'LOANLORD_REJECT_AFTER_CONFIRMED',
    name: '已拒绝',
    description: '房东确认后再拒绝订单'
  },
  8: {
    key: 'UNSUBSCRIBE_BOOKING',
    name: '退订中',
    description: '租客退订，退款到租客，等待支付补偿到房东'
  },
  9: {
    key: 'UNSUBSCRIBE_SUCCESS',
    name: '已退订',
    description: '租客退订，并且已经支付补偿到房东'
  },
  10: {
    key: 'BOOKING_SUCCESS',
    name: '待评论',
    description: '已经向房东支付租金，等待租客评论入住满意度'
  },
  11: {
    key: 'LOANLORD_UNSUBSCRIBE',
    name: '房东退订',
    description: '租客已经支付租金后，房东退订，理论上不允许，先保留这个状态'
  },
  12: {
    key: 'BOOKING_STATUS_ERROR',
    name: '状态错误',
    description: '状态更新错误导致的'
  },
  13: {
    key: 'FROZEN_BOOKING',
    name: '已冻结',
    description: '冻结订单不再处理'
  },
  14: {
    key: 'BOOKING_PAYMENT_TIME_OUT',
    name: '支付超时',
    description: '房东确认订单，房客超时未支付'
  },
  15: {
    key: 'ALIPAY_REFUND_ING',
    name: '退款中',
    description: '支付宝退款中，钱还没退，退的逻辑整到op里去'
  },
  16: {
    key: 'CONFIRMATION_TIME_OUT',
    name: '确认超时',
    description: '房东确认超时（24小时，暂定）'
  },
  17: {
    key: 'WANT_BOOKING',
    name: '求租',
    description: '求租'
  },
  18: {
    key: 'CANCEL_WANT_BOOKING',
    name: '已取消',
    description: '取消求租'
  },
  19: {
    key: 'WANTED_BOOKING',
    name: '订单错误',
    description: '*******废弃*******抢租'
  },
  20: {
    key: 'TENANT_CANCEL_ONE_WANTED_BOOKING',
    name: '订单错误',
    description: '*******废弃*******房客取消一个抢租的单'
  },
  21: {
    key: 'LANDLORD_CANCEL_ONE_WANTED_BOOKING',
    name: '订单错误',
    description: '*******废弃*******房东取消一个抢租的单'
  },
  22: {
    key: 'PAY_ONE_WANTED_BOOKING',
    name: '订单错误',
    description: '*******废弃*******支付抢租的单子'
  },
  23: {
    key: 'RESOLVED_BOOKING',
    name: '已解决',
    description: '解决的单子（冻结的单子被解决了）'
  },
  24: {
    key: 'BOOKING_OVERDUE',
    name: '已过期',
    description: '订单过期'
  },
  25: {
    key: 'ISSUE_TICKET_PASSED',
    name: '纠纷处理中',
    description: '纠纷状态'
  },
  26: {
    key: 'SLAVE_WANT_BOOKING',
    name: '确认中',
    description: '求租生成的子订单的初始状态，防止与父求租单状态相同'
  },
  27: {
    key: 'FAKE_STATUS_FOR_LANDLORD_OUTER_INSURANCE',
    name: '订单错误',
    description: '房东给别的平台房客加保险时用的假订单状态'
  },
  28: {
    key: 'TOO_FAST_CANCEL_WANT_BOOKING',
    name: '订单错误',
    description: '房客取消求租太快，房东抢单之后的错误状态'
  },
  100: {
    key: 'END_STATUS',
    name: '待确认',
    description: '结束状态，非流程状态，仅用于校验订单状态的正确性 接口调用者不用关注'
  }
};
