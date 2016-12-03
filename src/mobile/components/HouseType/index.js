import React, { Component, createElement } from 'react';

const Beds = ({ bed_num: bedNum, beds }) => (
  <li>
    <div className="icon mobile beds" />
    <div>
      <div className="title">共{bedNum}张床</div>
      {
        beds.map((bed, index) => (
          <p key={index}>{bed.bed_type}：{bed.bed_num}张</p>
        ))
      }
    </div>
  </li>
);

// 整套房子
const HouseType1 = ({ area, max_living_people: maxLivingPeople = 0, bed_num: bedNum = 0, beds = [], room_num: roomNum = 0, toilet_num: toiletNum = 0, living_room_num: livingRoomNum = 0 }) => (
  <ul className="house type">
    <li>
      <div className="icon mobile house" />
      <div>
        <div className="title">整套房子</div>
        <p>{area ? `房屋面积：${area}平方米` : ''}</p>
        <p>房屋户型：{roomNum}室{livingRoomNum}厅{toiletNum}卫</p>
      </div>
    </li>
    <li>
      <div className="icon mobile people" />
      <div>
        <div className="title">适宜{maxLivingPeople}人</div>
        <p>房客独享整套房屋</p>
      </div>
    </li>
    <Beds {...{ bedNum, beds }} />
  </ul>
);

// 独立房间
const HouseType2 = ({ area, max_living_people: maxLivingPeople = 0, bed_num: bedNum = 0, beds = [] }) => (
  <ul className="house type">
    <li>
      <div className="icon mobile house" />
      <div>
        <div className="title">独立房间</div>
        <p>{area ? `房屋面积：${area}平方米` : ''}</p>
      </div>
    </li>
    <li>
      <div className="icon mobile people" />
      <div>
        <div className="title">适宜{maxLivingPeople}人</div>
        <p>可能与房东或其他房客分住不同房间</p>
      </div>
    </li>
    <Beds {...{ bedNum, beds }} />
  </ul>
);

// 合住房间
const HouseType3 = ({ area, max_living_people: maxLivingPeople = 0, bed_num: bedNum = 0, beds = [] }) => (
  <ul className="house type">
    <li>
      <div className="icon mobile house" />
      <div>
        <div className="title">合住房间</div>
        <p>{area ? `房屋面积：${area}平方米` : ''}</p>
      </div>
    </li>
    <li>
      <div className="icon mobile people" />
      <div>
        <div className="title">适宜{maxLivingPeople}人</div>
        <p>可能与房东或其他房客分享一个房间</p>
      </div>
    </li>
    <Beds {...{ bedNum, beds }} />
  </ul>
);

const TypesElements = {
  HouseType1,
  HouseType2,
  HouseType3
};

// area, bed_num, room_num, toilet_num, max_living_people, beds
const HouseType = ({ house_type: houseType = 1, ...props }) => createElement(TypesElements[`HouseType${houseType}`], props);

export default HouseType;
