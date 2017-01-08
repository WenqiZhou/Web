import React, { Component, PropTypes, cloneElement } from 'react';
import classnames from 'classnames';
import { Nav } from '11-desktop';
import { setTitle } from '11-utils';
import Style from './index.less';
import Header, { HeaderImage, HeaderTitle, HeaderText } from './Header';
import ActivityNav from './Navigation';
import { ActivityTitle, ActivityBanner, ActivityHouses } from './Activity';
import { ActivityHouse as mockHouse } from '../../../../libs/mock';

export default class DesktopActivity extends Component {
  static propTypes = {
    ains: PropTypes.array.isRequired
  };

  static defaultProps = {
    ains: []
  };

  constructor(props) {
    super(props);
    this.state = {
      headerText: ''
    };
  }

  componentDidMount() {
    const tag = window.document.createElement('script');
    tag.type = 'text/javascript';
    tag.appendChild(window.document.createTextNode(`
      (function(m, ei, q, i, a, j, s) {
        m[i] = m[i] || function() {
          (m[i].a = m[i].a || []).push(arguments)
        };
        j = ei.createElement(q),
        s = ei.getElementsByTagName(q)[0];
        j.async = true;
        j.charset = 'UTF-8';
        j.src = '//static.meiqia.com/dist/meiqia.js';
        s.parentNode.insertBefore(j, s);
      })(window, document, 'script', '_MEIQIA');
      _MEIQIA('entId', 47404);`));
    window.document.body.appendChild(tag);
  }

  renderHeader = (data) => {
    switch (data.type) {
      case 1: {
        setTitle(data.top_title.title);
        return '';
      }
      case 2: {
        return <HeaderImage {...data} />;
      }
      case 4: {
        return <HeaderTitle {...data.title_double} />;
      }
      default : {
        return '';
      }
    }
  };

  renderHeaderText = (data = {}) => {
    console.log(data)
    if (data.type === 7) {
      return <HeaderText {...data} />
    }
    return '';
  };

  renderChildren = (data, index) => {
    switch (data.type) {
      case 5: {
        return <ActivityTitle {...data} />;
      }
      case 6: {
        return <ActivityBanner {...data} />;
      }
      case 7: {
        if (index === 0) {
          return '';
        }
        return <span>{data.text.content}</span>
      }
      default: {
        return '';
      }
    }
  };

  render() {
    const headers = this.props.ains.filter(({ type }) => [1, 2, 4].includes(type));

    const navList = this.props.ains.filter(({ type }) => type === 5);

    const contents = this.props.ains.filter(({ type }) => !([1, 2, 4].includes(type))).reduce((total, current, index, source) => {
      if (current.type === 7 && source[index - 1] && source[index - 1].type === 6) {
        total[total.length - 1].text = current;
      } else {
        total.push(current);
      }

      return total;
    }, []);

    return (
      <div className={classnames('lg-only', Style.activity)}>
        <Nav search black className={classnames(Nav.Style.index, 'dashboard')} />
        <Header>
          {
            headers.map(this.renderHeader).filter(elem => !!elem).map((element, key) => cloneElement(element, {
              key
            }))
          }
          {
            this.renderHeaderText(contents[0])
          }
        </Header>
        {
          /* 所有活动项目的导航 */
        }
        <ActivityNav list={navList} current={0} />
        {
          contents.map(this.renderChildren).filter(elem => !!elem).map((element, key) => cloneElement(element, {
            key
          }))
        }
        <ActivityHouses list={mockHouse.houses} showMore />
      </div>
    )
  }
}
