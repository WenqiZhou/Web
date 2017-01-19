import React, { Component, PropTypes } from 'react';

const noop = () => {
};

export default class CalendarHeader extends Component {
  static propTypes = {
    value: PropTypes.object,
    locale: PropTypes.object,
    yearSelectOffset: PropTypes.number, // 开始年份往前推
    yearSelectTotal: PropTypes.number, // 一共多少年
    onValueChange: PropTypes.func,
    onTypeChange: PropTypes.func,
    Select: PropTypes.func,
    prefixCls: PropTypes.string,
    type: PropTypes.string,
    showTypeSwitch: PropTypes.bool,
    headerComponents: PropTypes.array
  };

  static defaultProps = {
    yearSelectOffset: 10,
    yearSelectTotal: 20,
    onValueChange: noop,
    onTypeChange: noop
  };
}

