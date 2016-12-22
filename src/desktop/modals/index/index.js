import React, { Component } from 'react';
import { Nav } from '11-desktop';
import { Header } from '../../components/Headers';
import SectionGroup from './section-group';
import Search from './search';
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
  }, { 1: [], 2: [], 3: [], 5: [], 6: [], 7: [] });

  render() {
    return (
      <div className="index lg-only">
        <Nav current="/" path={this.props.path} className={Nav.Style.index} />
        <Header />
        <Search />
        <div className="banner no-padding">
          <img src="/assets/images/image_desktop_index_registe.png" alt="banner" />
        </div>
        <main className="container">
          {
            [6, 1].map((key) => (
              <SectionGroup key={key} type={key} list={this.state.list[key]} />
            ))
          }
        </main>
        <div className="banner no-padding">
          <img src="/assets/images/image_desktop_index_banner_ad.png" alt="banner" />
        </div>
        <main className="container">
          <SectionGroup key={3} type={3} list={this.state.list[3]} />
        </main>
      </div>
    )
  }
}
