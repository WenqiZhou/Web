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
      tenant_score_1: 52,  // 整洁度
      tenant_score_2: 53,  // 沟通
      tenant_score_3: 54,  // 遵守<房屋准则>
      tenant_score_4: 55,  // 总体评分
    }
  }
];

export const ActivityHouse = {
  "search_trace_id": "b84a6eee-d5b4-11e6-8dd9-022edde0e3ee",
  "houses": [{
    "score_0": 5.0,
    "rating": 5.0,
    "score_2": 5.0,
    "score_3": 5.0,
    "score_4": 5.0,
    "score_5": 5.0,
    "score_6": 5.0,
    "score_1": 5.0,
    "updated_at": 1474540981,
    "uin": 1973450184,
    "leaving_time": 43200,
    "like_count": "215",
    "max_living_people": 4,
    "images": [{ "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/84d54f46-f187-11e5-8c7c-026f7d59a5c9.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/8eded44e-f187-11e5-adb9-026f7d59a5c9.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/868f69a2-f187-11e5-a9e1-026f7d59a5c9.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/97033ad4-f187-11e5-b203-026f7d59a5c9.h" }],
    "city": "\u5317\u4eac",
    "stock_num": 1,
    "title": "\u671d\u9633\u4f53\u80b2\u9986",
    "map_img_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/6a8e27a2-f187-11e5-84aa-026f7d59a5c9.m",
    "enter_time": 54000,
    "score": 5.0,
    "location": { "latitude": 39927666, "longitude": 116440174 },
    "baidu_city": "\u5317\u4eac",
    "toilet_num": 1,
    "price": 1200,
    "max_distant_accept_months": 6,
    "before_enter_ban_days": 2,
    "room_num": 1,
    "address": "\u94f6\u6cb3Soho(A\u5ea7)",
    "house_type": 1,
    "min_booking_days": 1,
    "after_leave_ban_days": 2,
    "score_7": 5.0,
    "ready_status": 2,
    "house_id": 8475904001143771571,
    "min_distant_accept_days": 2,
    "created_at": 1458799961,
    "baidu_district": "\u4e1c\u57ce\u533a",
    "landlord": {
      "is_landlord": true,
      "created_at": 1458799945,
      "real_name": "\u5468\u6587\u797a",
      "new_verified_id": 1,
      "uin": 1973450184,
      "hx_id": "1512118679"
    },
    "minimum_days": 1,
    "bed_num": 1
  }, {
    "score_0": 5.0,
    "rating": 5.0,
    "score_2": 5.0,
    "score_3": 5.0,
    "score_4": 5.0,
    "special_discount": { "discount": 33, "origin_price": 6600, "start_date": 20161220, "end_date": 20161227 },
    "score_6": 5.0,
    "score_1": 5.0,
    "big_house_type": 1,
    "updated_at": 1482388593,
    "uin": 405383884,
    "leaving_time": 43200,
    "like_count": "9",
    "max_living_people": 4,
    "images": [{ "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/dfc65008-23eb-11e6-89fb-026f7d59a5c9.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/dee37db4-23eb-11e6-bccb-026f7d59a5c9.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/71e64b4a-2d4d-11e6-86f7-061131ce81cf.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/6d8d2be0-2d4d-11e6-9d56-024c5ea8dc61.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/dee5e5d6-23eb-11e6-9d28-026f7d59a5c9.h" }],
    "score_5": 5.0,
    "max_booking_days": 5,
    "city": "\u5317\u4eac",
    "stock_num": 1,
    "title": "\u5566\u5566\u961f",
    "map_img_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/15c9c2f6-36cb-11e6-9c47-022edde0e3ee.m",
    "enter_time": 54000,
    "score": 5.0,
    "location": { "latitude": 39983504, "longitude": 116439721 },
    "baidu_city": "\u5317\u4eac",
    "tags": 16,
    "toilet_num": 1,
    "price": 20000,
    "max_distant_accept_months": 12,
    "room_num": 1,
    "address": "\u5317\u4eac\u671d\u9633\u828d\u836f\u5c45",
    "house_type": 1,
    "min_booking_days": 1,
    "score_7": 5.0,
    "ready_status": 2,
    "house_id": 1741110524735674442,
    "min_distant_accept_days": 1,
    "created_at": 1466334794,
    "baidu_district": "\u671d\u9633\u533a",
    "landlord": {
      "landlord_verified": 1,
      "about": "\u5f88\u597d",
      "bigcode400": "4008101108",
      "extension": 9,
      "head_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/80cbc832-a242-11e6-87c3-022edde0e3ee.u",
      "created_at": 1457579976,
      "is_landlord": true,
      "real_name": "\u6ce2\u6ce2",
      "new_verified_id": 1,
      "uin": 405383884,
      "hx_id": "1873564446"
    },
    "minimum_days": 1,
    "bed_num": 1
  }, {
    "score_0": 5.0,
    "rating": 5.0,
    "score_2": 4.5,
    "score_3": 5.0,
    "score_4": 4.5,
    "score_5": 4.5,
    "score_6": 5.0,
    "score_1": 4.5,
    "living_room_num": 3,
    "uin": 2042229089,
    "leaving_time": 46800,
    "facilities": 2097151,
    "like_count": "732",
    "max_living_people": 2,
    "house_type": 1,
    "images": [{ "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/1a663b22-ae23-11e5-ab96-026f7d59a5c9.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/ac367c7a-b9ee-11e5-9e92-026f7d59a5c9.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/0ea1cee0-bab8-11e5-a506-026f7d59a5c9.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/1a6b585a-ae23-11e5-8fae-026f7d59a5c9.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/0e849604-bab8-11e5-81cc-026f7d59a5c9.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/4fe0d0ee-bab9-11e5-bb77-026f7d59a5c9.h" }],
    "cp": 2,
    "wifi_account": "\u9ed1\u80e1\u6912",
    "max_booking_days": 12,
    "city": "\u5317\u4eac",
    "stock_num": 4,
    "area": 888.0,
    "map_img_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/d5fce528-f4e3-11e5-a295-026f7d59a5c9.m",
    "enter_time": 39600,
    "score": 5.0,
    "weekend_price": 800,
    "location": { "latitude": 40005418, "longitude": 116280318 },
    "comment_num": 12,
    "balcony_num": 5,
    "baidu_city": "\u5317\u4eac",
    "extra_charge": { "month_discount": 60, "week_discount": 20 },
    "tags": 119,
    "toilet_num": 1,
    "wifi_password": "\u9ad8\u89c4\u683c",
    "price": 2000000,
    "max_distant_accept_months": 3,
    "updated_at": 1462782971,
    "room_num": 1,
    "address": "\u9890\u548c\u56ed",
    "photo_type": 1,
    "min_booking_days": 1,
    "house_verified": 1,
    "score_7": 5.0,
    "ready_status": 2,
    "house_id": 8771307149277398478,
    "min_distant_accept_days": 2,
    "created_at": 1451381327,
    "title": "\u5927\u795e\u7684\u4f4f\u5904",
    "baidu_district": "\u6d77\u6dc0\u533a",
    "landlord": {
      "new_verified_id": 1,
      "about": "\u6ca1\u9519\uff0c\u6211\u5c31\u662f\u5927\u795e\uff0c\u5927\u795e\u5c31\u662f\u6211\uff0c\u5982\u679c\u4f60\u597d\u5947\u5173\u4e8e\u6211\u7684\u4e00\u5207\uff0c\u8bf7\u79c1\u804a\u6211\uff0c\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8",
      "head_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/c0b3e234-e6a1-11e5-8105-026f7d59a5c9.u",
      "created_at": 1451360038,
      "is_landlord": true,
      "real_name": "\u4f60\u731c\u6211\u662f\u8c01123",
      "landlord_type": 1,
      "landlord_verified": 1,
      "uin": 2042229089,
      "hx_id": "2042229089"
    },
    "kitchen_num": 3,
    "minimum_days": 1,
    "bed_num": 18
  }, {
    "score_0": 4.5,
    "rating": 4.5,
    "score_2": 4.5,
    "score_3": 5.0,
    "score_4": 5.0,
    "score_5": 5.0,
    "score_6": 5.0,
    "score_1": 4.5,
    "updated_at": 1452754704,
    "uin": 4075313686,
    "leaving_time": 43200,
    "like_count": "558",
    "house_certified": 1,
    "images": [{ "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/adf76798-bf4f-11e5-8a7e-026f7d59a5c9.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/98a87ba4-c015-11e5-bbc5-026f7d59a5c9.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/299f231a-bf49-11e5-9c63-026f7d59a5c9.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/8681d96c-c014-11e5-a814-026f7d59a5c9.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/e4be940a-c016-11e5-a4bc-026f7d59a5c9.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/f5d9e790-bf66-11e5-a8dd-026f7d59a5c9.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/f32ee6d0-c015-11e5-9e2e-026f7d59a5c9.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/1014a26a-c018-11e5-84bd-026f7d59a5c9.h" }],
    "city": "\u5317\u4eac",
    "stock_num": 1,
    "score": 4.5,
    "title": "\u6392\u7b2c\u4e00\u7684\u623f!!!",
    "map_img_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/24c4036e-caee-11e5-a6fb-026f7d59a5c9.m",
    "enter_time": 54000,
    "house_boutique": 1,
    "location": { "latitude": 39927666, "longitude": 116440174 },
    "baidu_city": "\u5317\u4eac",
    "extra_charge": { "week_discount": 23 },
    "tags": 14,
    "toilet_num": 1,
    "comment_num": 3,
    "price": 999900,
    "room_num": 2,
    "address": "\u94f6\u6cb3Soho(A\u5ea7),\u5317\u4eac\u5e02\u4e1c\u57ce\u533a\u5357\u7af9\u6746\u80e1\u540c5\u53f7\u697c",
    "deposit_fee": 30000,
    "house_type": 1,
    "house_verified": 1,
    "score_7": 5.0,
    "ready_status": 2,
    "house_id": 17503339003247334467,
    "created_at": 1451360436,
    "baidu_district": "\u4e1c\u57ce\u533a",
    "landlord": {
      "head_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/c09d3600-dc34-11e5-a324-026f7d59a5c9.u",
      "real_name": "\u6839\u54e5",
      "uin": 4075313686
    },
    "bed_num": 3,
    "max_living_people": 3
  }, {
    "score_0": 5.0,
    "rating": 5.0,
    "score_2": 5.0,
    "score_3": 5.0,
    "score_4": 5.0,
    "score_5": 5.0,
    "score_6": 5.0,
    "score_1": 5.0,
    "updated_at": 1456459150,
    "uin": 965453262,
    "leaving_time": 43200,
    "like_count": "265",
    "max_living_people": 4,
    "images": [{ "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/1a8eca64-d9f8-11e5-a647-026f7d59a5c9.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/4531bbae-dc3d-11e5-9a6d-026f7d59a5c9.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/1a8eca64-d9f8-11e5-a647-026f7d59a5c9.h" }],
    "city": "\u5317\u4eac",
    "stock_num": 1,
    "title": "3\u82cd\u5929\u9976\u8fc7\u8c0123333",
    "map_img_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/8008c5e8-dc3c-11e5-a861-026f7d59a5c9.m",
    "enter_time": 54000,
    "score": 5.0,
    "location": { "latitude": 39923710, "longitude": 116443121 },
    "baidu_city": "\u5317\u4eac",
    "toilet_num": 1,
    "price": 100,
    "room_num": 1,
    "address": "\u4eac\u534e\u8c6a\u56ed",
    "house_type": 1,
    "score_7": 5.0,
    "ready_status": 2,
    "house_id": 4146590187394750658,
    "created_at": 1456458810,
    "baidu_district": "\u671d\u9633\u533a",
    "landlord": {
      "is_landlord": true,
      "head_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/2cd01a34-dc3c-11e5-91ee-026f7d59a5c9.u",
      "created_at": 1455605015,
      "real_name": "\u8d85\u8d85",
      "uin": 965453262,
      "hx_id": "965453262"
    },
    "bed_num": 1
  }, {
    "score_0": 5.0,
    "rating": 5.0,
    "score_2": 5.0,
    "score_3": 5.0,
    "score_4": 5.0,
    "score_5": 5.0,
    "score_6": 5.0,
    "score_1": 5.0,
    "big_house_type": 2,
    "updated_at": 1483585209,
    "uin": 1400811077,
    "leaving_time": 43200,
    "facilities": 8,
    "like_count": "9",
    "max_living_people": 4,
    "images": [{ "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/5aaad2ea-d2f0-11e6-99c9-022edde0e3ee.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/5f1cda12-d2f0-11e6-8592-022edde0e3ee.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/660e79de-d2f0-11e6-85a1-022edde0e3ee.h" }],
    "city": "\u5317\u4eac",
    "stock_num": 1,
    "title": "qass",
    "map_img_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/58cb800e-2702-11e6-b55a-026f7d59a5c9.m",
    "enter_time": 54000,
    "score": 5.0,
    "location": { "latitude": 39927666, "longitude": 116440174 },
    "baidu_city": "\u5317\u4eac",
    "toilet_num": 1,
    "price": 100,
    "room_num": 1,
    "address": "\u94f6\u6cb3Soho(A\u5ea7)",
    "house_type": 1,
    "score_7": 5.0,
    "ready_status": 2,
    "house_id": 6016437765114780035,
    "created_at": 1464680171,
    "baidu_district": "\u4e1c\u57ce\u533a",
    "landlord": {
      "created_at": 1464663798,
      "real_name": "\u4f9d\u4f9d\u4f9d\u4f9d\u4f9d\u4f9d",
      "is_landlord": true,
      "hx_id": "1062998127",
      "uin": 1400811077
    },
    "bed_num": 1
  }, {
    "score_0": 5.0,
    "rating": 5.0,
    "score_2": 5.0,
    "score_3": 5.0,
    "score_4": 5.0,
    "score_5": 5.0,
    "score_6": 5.0,
    "score_1": 5.0,
    "updated_at": 1483001815,
    "uin": 2106044924,
    "leaving_time": 43200,
    "facilities": 8192,
    "like_count": "163",
    "max_living_people": 4,
    "images": [{ "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/1e99d8f0-e72d-11e5-ab04-026f7d59a5c9.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/9c53e056-ee71-11e5-bbe4-026f7d59a5c9.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/821054f4-ee71-11e5-8bd9-026f7d59a5c9.h" }],
    "city": "\u5317\u4eac",
    "stock_num": 1,
    "title": "\u54c8\u54c8\u54c8",
    "map_img_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/205f6f38-fc90-11e5-bce7-026f7d59a5c9.m",
    "enter_time": 54000,
    "score": 5.0,
    "location": { "latitude": 39927666, "longitude": 116440174 },
    "baidu_city": "\u5317\u4eac",
    "tags": 64,
    "toilet_num": 1,
    "price": 100,
    "room_num": 1,
    "address": "\u94f6\u6cb3Soho(A\u5ea7)",
    "house_type": 1,
    "score_7": 5.0,
    "ready_status": 2,
    "house_id": 9045394072601860833,
    "created_at": 1460013165,
    "baidu_district": "\u4e1c\u57ce\u533a",
    "landlord": {
      "created_at": 1459931514,
      "real_name": "\u7528\u62370085\u6ef4\u6ef4",
      "is_landlord": true,
      "hx_id": "1096457523",
      "uin": 2106044924
    },
    "bed_num": 1
  }, {
    "score_0": 5.0,
    "rating": 5.0,
    "score_2": 5.0,
    "score_3": 5.0,
    "score_4": 5.0,
    "special_discount": { "discount": 80, "origin_price": 80, "start_date": 20161229, "end_date": 20170128 },
    "score_6": 5.0,
    "score_1": 5.0,
    "enter_time": 54000,
    "updated_at": 1483001683,
    "uin": 237830219,
    "leaving_time": 43200,
    "facilities": 8704,
    "like_count": "319",
    "max_living_people": 4,
    "images": [{ "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/bc06ac10-f65c-11e5-a5bd-026f7d59a5c9.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/f60c60aa-e9da-11e5-8493-026f7d59a5c9.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/f9f90cae-e9da-11e5-8385-026f7d59a5c9.h" }],
    "score_5": 5.0,
    "city": "\u5317\u4eac",
    "stock_num": 1,
    "title": "\u6d4b\u8bd5\u7528\u623f",
    "show_special_discount": 1,
    "map_img_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/4710e6ce-f57f-11e5-a495-026f7d59a5c9.m",
    "big_house_type": 1,
    "score": 5.0,
    "weekend_price": 6500,
    "location": { "latitude": 39923710, "longitude": 116443121 },
    "baidu_city": "\u5317\u4eac",
    "extra_charge": { "week_discount": 36 },
    "tags": 66,
    "toilet_num": 1,
    "price": 63900,
    "max_distant_accept_months": 12,
    "room_num": 1,
    "address": "\u4eac\u534e\u8c6a\u56ed",
    "house_type": 1,
    "min_booking_days": 1,
    "score_7": 5.0,
    "ready_status": 2,
    "house_id": 1021473014448141251,
    "created_at": 1459236270,
    "baidu_district": "\u671d\u9633\u533a",
    "landlord": {
      "is_landlord": true,
      "head_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/b5735e28-86e1-11e6-8ea9-022edde0e3ee.u",
      "created_at": 1458870957,
      "real_name": "\u60a8\u597d",
      "new_verified_id": 1,
      "uin": 237830219,
      "hx_id": "69700674"
    },
    "kitchen_num": 1,
    "minimum_days": 1,
    "bed_num": 1
  }, {
    "score_0": 4.5,
    "rating": 4.5,
    "score_2": 4.5,
    "score_3": 5.0,
    "score_4": 5.0,
    "score_5": 5.0,
    "score_6": 5.0,
    "score_1": 4.5,
    "updated_at": 1482386888,
    "uin": 1523308208,
    "leaving_time": 72000,
    "facilities": 127,
    "like_count": "353",
    "max_living_people": 16,
    "images": [{ "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/2b0ba1ca-b99e-11e5-904f-026f7d59a5c9.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/4d5038b6-a4a6-11e5-a141-026f7d59a5c9.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/34cf26d2-b99e-11e5-924c-026f7d59a5c9.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/2f855da4-b99e-11e5-ab83-026f7d59a5c9.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/323ce4a4-b99e-11e5-932f-026f7d59a5c9.h" }],
    "cp": 2,
    "city": "\u5317\u4eac",
    "stock_num": 1,
    "title": "\u8fd9\u662f\u4e00\u4e2a\u540d\u5b57\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u7684\u623f",
    "map_img_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/0172d0bc-c80d-11e6-9860-022edde0e3ee.m",
    "enter_time": 43200,
    "score": 4.5,
    "location": { "latitude": 39926705, "longitude": 116442537 },
    "prof_photo": 3,
    "baidu_city": "\u5317\u4eac",
    "extra_charge": { "month_discount": 15, "week_discount": 12 },
    "tags": 34,
    "toilet_num": 1,
    "comment_num": 1,
    "price": 100,
    "room_num": 1,
    "address": "\u4e2d\u56fd\u53f8\u6cd5\u90e8",
    "house_type": 1,
    "score_7": 5.0,
    "ready_status": 2,
    "house_id": 6542558936069626827,
    "created_at": 1452652423,
    "baidu_district": "\u671d\u9633\u533a",
    "landlord": {
      "zm_score": 724,
      "about": "\u82f9\u679c\u516c\u53f8\u8fd8\u6709\u4e0d\u5230\u4e24\u5468\u7684\u65f6\u95f4\u5c31\u8981\u53d1\u5e03\u5b63\u5ea6\u8d22\u62a5\u3002\u5bf9\u4e8e\u6295\u8d44\u8005\u800c\u8a00\uff0c\u662f\u65f6\u5019\u9700\u8981\u597d\u597d\u5bf9\u7167\u82f9\u679c\u7684\u8d22\u62a5\uff0c\u6765\u5ba1\u89c6\u8be5\u516c\u53f8\u7684\u53d1\u5c55\u662f\u5426\u7b26\u5408\u6b64\u524d\u9884\u671f\u3002\u867d\u7136\u57fa\u4e8e\u591a\u79cd\u539f\u56e0\uff0c\u8fd9\u4efd\u8d22\u62a5\u7684\u7ed3\u679c\u5c06\u5341\u5206\u91cd\u8981\u3002\u4e0d\u8fc7\uff0c\u5c24\u5176\u9700\u8981\u503c\u5f97\u7279\u522b\u6ce8\u610f\u7684\u662f\uff0c\u82f9\u679c\u5bf9\u4e8e\u4e0b\u4e00\u8d22\u5b63\uff0c\u4e5f\u5c31\u662f\u7b2c\u4e8c\u8d22\u5b63\u4e1a\u7ee9\u7684\u524d\u77bb\u6027\u6307\u5bfc\u3002",
      "head_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/24b5e266-59eb-11e6-9912-022edde0e3ee.u",
      "created_at": 1452602347,
      "is_landlord": true,
      "real_name": "\u66f9\u76f8\u752b",
      "new_verified_id": 1,
      "uin": 1523308208,
      "hx_id": "429501241"
    },
    "bed_num": 6
  }, {
    "score_0": 4.0,
    "rating": 4.0,
    "score_2": 5.0,
    "score_3": 5.0,
    "score_4": 5.0,
    "score_5": 5.0,
    "score_6": 5.0,
    "score_1": 5.0,
    "enter_time": 7200,
    "updated_at": 1482386873,
    "uin": 1523308208,
    "leaving_time": 39600,
    "facilities": 32767,
    "like_count": "334",
    "max_living_people": 3,
    "images": [{ "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/79bf49b2-b51f-11e5-9b4a-02355002f52f.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/7922fefe-b51f-11e5-bb9f-024c5ea8dc61.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/7a84857e-b51f-11e5-8c17-024c5ea8dc61.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/af3b3180-b9ea-11e5-a497-026f7d59a5c9.h" }, { "image_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/af636e98-b9ea-11e5-b61f-026f7d59a5c9.h" }],
    "cp": 1,
    "city": "\u5317\u4eac",
    "stock_num": 4,
    "title": "Private Pool House w/Ama",
    "map_img_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/f82aeb48-c80c-11e6-9267-022edde0e3ee.m",
    "big_house_type": 1,
    "score": 4.0,
    "location": { "latitude": 39928136, "longitude": 116439492 },
    "baidu_city": "\u5317\u4eac",
    "extra_charge": { "month_discount": 15, "week_discount": 12 },
    "tags": 98,
    "toilet_num": 1,
    "comment_num": 1,
    "price": 100,
    "max_distant_accept_months": 12,
    "room_num": 1,
    "address": "\u671d\u9633\u95e8SOHO\u5199\u5b57\u697c",
    "house_type": 2,
    "min_booking_days": 1,
    "score_7": 5.0,
    "ready_status": 2,
    "house_id": 6542558936133981846,
    "created_at": 1452685223,
    "baidu_district": "\u4e1c\u57ce\u533a",
    "landlord": {
      "zm_score": 724,
      "about": "\u82f9\u679c\u516c\u53f8\u8fd8\u6709\u4e0d\u5230\u4e24\u5468\u7684\u65f6\u95f4\u5c31\u8981\u53d1\u5e03\u5b63\u5ea6\u8d22\u62a5\u3002\u5bf9\u4e8e\u6295\u8d44\u8005\u800c\u8a00\uff0c\u662f\u65f6\u5019\u9700\u8981\u597d\u597d\u5bf9\u7167\u82f9\u679c\u7684\u8d22\u62a5\uff0c\u6765\u5ba1\u89c6\u8be5\u516c\u53f8\u7684\u53d1\u5c55\u662f\u5426\u7b26\u5408\u6b64\u524d\u9884\u671f\u3002\u867d\u7136\u57fa\u4e8e\u591a\u79cd\u539f\u56e0\uff0c\u8fd9\u4efd\u8d22\u62a5\u7684\u7ed3\u679c\u5c06\u5341\u5206\u91cd\u8981\u3002\u4e0d\u8fc7\uff0c\u5c24\u5176\u9700\u8981\u503c\u5f97\u7279\u522b\u6ce8\u610f\u7684\u662f\uff0c\u82f9\u679c\u5bf9\u4e8e\u4e0b\u4e00\u8d22\u5b63\uff0c\u4e5f\u5c31\u662f\u7b2c\u4e8c\u8d22\u5b63\u4e1a\u7ee9\u7684\u524d\u77bb\u6027\u6307\u5bfc\u3002",
      "head_url": "http://s3.cn-north-1.amazonaws.com.cn/11bnbimgs/24b5e266-59eb-11e6-9912-022edde0e3ee.u",
      "created_at": 1452602347,
      "is_landlord": true,
      "real_name": "\u66f9\u76f8\u752b",
      "new_verified_id": 1,
      "uin": 1523308208,
      "hx_id": "429501241"
    },
    "minimum_days": 1,
    "bed_num": 5
  }],
  "ret": 0,
  "last_id": "30.000000,1482386873,6542558936133981846"
};
