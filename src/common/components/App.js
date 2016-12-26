import React, { Component, cloneElement } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { locale } from 'moment';
import 'moment/locale/zh-cn';
import Store from '11-store';
import '../style'

locale('zh-cn');

export default class App extends Component {
  render() {
    return this.props.children;
  }
}
