import React, { Component } from 'react';
import { connect } from 'react-redux';
import DesktopApp from '../../desktop/components/App';
import MobileApp from '../../mobile/components/App';
import '../style'

@connect()
export default class App extends Component {
  render() {
    return (
      <div>
        <DesktopApp>
          {this.props.children}
        </DesktopApp>
        <MobileApp>
          {this.props.children}
        </MobileApp>
      </div>
    )
  }
}
