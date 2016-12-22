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
