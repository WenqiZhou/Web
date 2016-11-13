import React, { Component } from 'react';
import { Header } from '../../components/Headers';
import '../../style/index.less';

class EventSection extends Component {
  render() {
    return (
      <section className="events">
        event
      </section>
    )
  }
}

export default class DesktopIndex extends Component {
  render() {
    return (
      <div className="desktop index">
        <Header />
        <div className="banner no-padding">
          <img src="/assets/images/image_desktop_index_registe.png" alt="banner" />
        </div>
        <main>
          main
        </main>
      </div>
    )
  }
}
