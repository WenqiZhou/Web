import React, { Component, cloneElement } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { locale } from 'moment';
import 'moment/locale/zh-cn';
import env from '../libs/os';
import '../style'
import '../../mobile/libs/scale';

locale('zh-cn');

export default class App extends Component {
  render() {
    return (
      <div className={classnames({ desktop: true } || env)}>
        { this.props.children }
      </div>
    )
  }
}
