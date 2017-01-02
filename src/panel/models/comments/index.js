// comments
import React, { Component } from 'react';
import Style from './index.less';

export default class Comments extends Component {
  render() {
    return (
      <div className={Style.comments}>
        {this.props.children}
      </div>
    )
  }
}
