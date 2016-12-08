import React, { Component } from 'react';
import { Header } from '../../components/Headers';
import '../../style/index.less';

import { loginModal } from '../../components/AuthModals/LoginModal';

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
  componentDidMount() {
  }

  render() {
    return (
      <div className="desktop index">
        <Header />
        <div className="banner no-padding">
          <img src="/assets/images/image_desktop_index_registe.png" alt="banner" />
        </div>
        <main>
          <button
            onClick={() => {
              loginModal()
            }}
          >
            登录测试
          </button>
        </main>
      </div>
    )
  }
}
