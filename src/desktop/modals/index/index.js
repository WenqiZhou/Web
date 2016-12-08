import React, { Component } from 'react';
import { Header } from '../../components/Headers';
import Navigation from '../../components/Navigation';
import SectionGroup from './section-group';
import '../../style/index.less';

import { loginModal } from '../../components/AuthModals/LoginModal';

export default class DesktopIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: { ...this.parseData(props.data) }
    }
  }

  componentWillReceiveProps(np) {
    this.setState({
      list: { ...this.parseData(np.data) }
    });
  }

  parseData = (list) => list.reduce((total, item) => {
    total[item.type] = total[item.type] || [];
    total[item.type].push(item);
    return total;
  }, { 1: [], 2: [], 3: [] });

  render() {
    return (
      <div className="desktop index">
        <Navigation current="/" path={this.props.path} className="index" />
        <Header />
        <div className="banner no-padding">
          <img src="/assets/images/image_desktop_index_registe.png" alt="banner" />
        </div>
        <main className="container">
          {
            [1, 2].map((key) => (
              <SectionGroup key={key} type={key} list={this.state.list[key]} />
            ))
          }
        </main>
      </div>
    )
  }
}
