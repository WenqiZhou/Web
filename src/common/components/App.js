import React, { Component, cloneElement } from 'react';
import { locale } from 'moment';
import 'moment/locale/zh-cn';
import '../style'

locale('zh-cn');

export default class App extends Component {
  render() {
    return this.props.children;
  }
}
