/* eslint-disable */

export const UserInfo = {
  "header": {
    "client_ip": "218.72.17.189",
    "access_ip": "10.11.254.235",
    "client_uversion": 50331904,
    "user_uin": 2114320527,
    "uni_id": "ab01b39c-c875-11e6-a895-02355002f52f",
    "client_version": "3.0.1.0"
  },
  "user": {
    "clt_type": 1,
    "igetui_cltid": "1e86db01479e15eec916aec51e20e4aa",
    "updated_at": 1477454867,
    "shake_feedback": 2,
    "uin": 2114320527,
    "new_verified_school_email": 2,
    "tutorial": 100,
    "head_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/b2b07126-9b31-11e6-8697-02355002f52f.u",
    "share_url": "http://h5.11bnb.com/app/share/userInfo/2114320527",
    "wanted_block": 2,
    "hx_pwd": "CpANw3hRr5Iz",
    "reply_rate": -1.0,
    "hx_id": "1362775179",
    "average_reply_time": -1,
    "thumbImage": "http://s3.cn-north-1.amazonaws.com.cn/11bnbstatic/invite_logo.png",
    "phone": "+8615988545765",
    "phone_verified": true,
    "sms_block": 2,
    "member_number": "TJ073222",
    "school": "\u5b81\u6ce2\u804c\u4e1a\u6280\u672f\u5b66\u9662",
    "is_in_white_list": 2,
    "push_block": 2,
    "gender": 1,
    "created_at": 1477454791,
    "real_name": "yeliex",
    "receptance_rate": -1.0
  }
};

export const OrderList = [
  {
    key: '1',
    name: '独立花园露台的法租界洋房(长签优惠大)-静安去',
    id: '3783274',
    money: '¥330元',
    status: '已支付',
    image: 'http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/f6429114-a48f-11e6-b006-022edde0e3ee.h',
    time: new Date()
  },
  {
    key: '2',
    name: '独立花园露台的法租界洋房(长签优惠大)-静安去',
    id: '3783274',
    money: '¥330元',
    status: '待支付',
    image: 'http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/f6429114-a48f-11e6-b006-022edde0e3ee.h',
    time: new Date()
  },
  {
    key: '3',
    name: '独立花园露台的法租界洋房(长签优惠大)-静安去',
    id: '3783274',
    money: '¥330元',
    status: '待确认',
    image: 'http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/f6429114-a48f-11e6-b006-022edde0e3ee.h',
    time: new Date()
  },
  {
    key: '4',
    name: '独立花园露台的法租界洋房(长签优惠大)-静安去',
    id: '3783274',
    money: '¥330元',
    status: '已完成',
    image: 'http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/f6429114-a48f-11e6-b006-022edde0e3ee.h',
    time: new Date()
  },
  {
    key: '5',
    name: '独立花园露台的法租界洋房(长签优惠大)-静安去',
    id: '3783274',
    money: '¥330元',
    status: '已失效',
    image: 'http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/f6429114-a48f-11e6-b006-022edde0e3ee.h',
    time: new Date()
  }
];

export const CommentsList = [
  {
    comment_id: 1,
    booking_id: 1,
    house_id: 1,
    landlord_uin: 1,
    tenant_uin: 1,
    from: 1,
    visible: 1,
    status: 1,
    by_tenant: {
      type: 1,         // 评论类型 (0x1: 租客评房东, 0x2: 房东评租客)
      create_time: 2,  // 创建时间
      user: 10, // 评论者信息 (该字段在读取的时候由系统自动生成)
      content: 11,         // 评论正文
      images: 12,  // 评论图片
      murmur: 13,          // 私下反馈 (查询时不返回)
      recommend_house: 14,   // 是否推荐该房源 (查询时不返回)
      recommend_tenant: 15,  // 是否推荐该租客 (查询时不返回)
      // 房客评房东(查询时不返回)
      landlord_score_0: 31,  // 总体评分
      landlord_score_1: 32,  // 准确性
      landlord_score_2: 33,  // 整洁程度
      landlord_score_3: 34,  // 入住帮助
      landlord_score_4: 35,  // 沟通
      landlord_score_5: 36,  // 位置
      landlord_score_6: 37,  // 性价比
      landlord_score_7: 38,  //

      // 房东评房客(查询时不返回)
      tenant_score_1: 52,  // 整洁度
      tenant_score_2: 53,  // 沟通
      tenant_score_3: 54,  // 遵守<房屋准则>
      tenant_score_4: 55,  // 总体评分
    },
    by_landlord: {
      type: 1,         // 评论类型 (0x1: 租客评房东, 0x2: 房东评租客)
      create_time: 2,  // 创建时间
      user: 10, // 评论者信息 (该字段在读取的时候由系统自动生成)
      content: 11,         // 评论正文
      images: 12,  // 评论图片
      murmur: 13,          // 私下反馈 (查询时不返回)
      recommend_house: 14,   // 是否推荐该房源 (查询时不返回)
      recommend_tenant: 15,  // 是否推荐该租客 (查询时不返回)
      // 房客评房东(查询时不返回)
      landlord_score_0: 31,  // 总体评分
      landlord_score_1: 32,  // 准确性
      landlord_score_2: 33,  // 整洁程度
      landlord_score_3: 34,  // 入住帮助
      landlord_score_4: 35,  // 沟通
      landlord_score_5: 36,  // 位置
      landlord_score_6: 37,  // 性价比
      landlord_score_7: 38,  //

      // 房东评房客(查询时不返回)
      tenant_score_1: 52,  // 整洁度
      tenant_score_2: 53,  // 沟通
      tenant_score_3: 54,  // 遵守<房屋准则>
      tenant_score_4: 55,  // 总体评分
    }
  },
  {
    comment_id: 2,
    booking_id: 2,
    house_id: 2,
    landlord_uin: 2,
    tenant_uin: 2,
    from: 2,
    visible: 2,
    status: 2,
    by_tenant: {
      type: 2,         // 评论类型 (0x2: 租客评房东, 0x2: 房东评租客)
      create_time: 2,  // 创建时间
      user: 20, // 评论者信息 (该字段在读取的时候由系统自动生成)
      content: 22,         // 评论正文
      images: 22,  // 评论图片
      murmur: 23,          // 私下反馈 (查询时不返回)
      recommend_house: 24,   // 是否推荐该房源 (查询时不返回)
      recommend_tenant: 25,  // 是否推荐该租客 (查询时不返回)
      // 房客评房东(查询时不返回)
      landlord_score_0: 32,  // 总体评分
      landlord_score_1: 32,  // 准确性
      landlord_score_2: 33,  // 整洁程度
      landlord_score_3: 34,  // 入住帮助
      landlord_score_4: 35,  // 沟通
      landlord_score_5: 36,  // 位置
      landlord_score_6: 37,  // 性价比
      landlord_score_7: 38,  //
      // 房东评房客(查询时不返回)
      tenant_score_1: 52,  // 整洁度
      tenant_score_2: 53,  // 沟通
      tenant_score_3: 54,  // 遵守<房屋准则>
      tenant_score_4: 55,  // 总体评分
    },
    by_landlord: {
      type: 2,         // 评论类型 (0x2: 租客评房东, 0x2: 房东评租客)
      create_time: 2,  // 创建时间
      user: 20, // 评论者信息 (该字段在读取的时候由系统自动生成)
      content: 22,         // 评论正文
      images: 22,  // 评论图片
      murmur: 23,          // 私下反馈 (查询时不返回)
      recommend_house: 24,   // 是否推荐该房源 (查询时不返回)
      recommend_tenant: 25,  // 是否推荐该租客 (查询时不返回)
      // 房客评房东(查询时不返回)
      landlord_score_0: 32,  // 总体评分
      landlord_score_1: 32,  // 准确性
      landlord_score_2: 33,  // 整洁程度
      landlord_score_3: 34,  // 入住帮助
      landlord_score_4: 35,  // 沟通
      landlord_score_5: 36,  // 位置
      landlord_score_6: 37,  // 性价比
      landlord_score_7: 38,  //
      // 房东评房客(查询时不返回)
      tenant_score_2: 52,  // 整洁度
      tenant_score_2: 53,  // 沟通
      tenant_score_3: 54,  // 遵守<房屋准则>
      tenant_score_4: 55,  // 总体评分
    }
  }
];
