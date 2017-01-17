import React, { Component, PropTypes, cloneElement } from 'react';
import Scroll, { animateScroll, Element } from 'react-scroll';
import classnames from 'classnames';
import { Nav } from '11-desktop';
import { setTitle, responsive } from '11-utils';
import Style from './index.less';
import Header, { HeaderImage, HeaderTitle, HeaderText } from './Header';
import ActivityNav from './Navigation';
import { ActivityTitle, ActivityBanner, ActivityHouses } from './Activity';

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
      headerText: '',
      navFixed: false
    };
  }

  componentDidMount() {
    if (typeof window === 'undefined') return;
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

    this.setScroll();
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  setScroll = () => {
    // 本来是要加上Nav的高度,但是因为跟在nav后面置顶 高度抵消
    const headerHeight = Number(responsive.style(window.document.getElementsByClassName(Style.header)[0], 'height').replace(/px$/, ''));

    window.onscroll = (e) => {
      const scroll = Number(window.document.body.scrollTop) + Number(window.document.documentElement.scrollTop);
      if (scroll >= headerHeight && !this.state.navFixed) {
        this.setNavFixed(true);
        return;
      }
      if (scroll < headerHeight && this.state.navFixed) {
        this.setNavFixed(false);
      }
    }
  };

  setNavFixed = (fixed = false) => {
    this.setState({
      navFixed: fixed
    });
  };

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
    if (data.type === 7) {
      return <HeaderText {...data} />
    }
    return '';
  };

  renderSection = ({ houses, image, text }, index) => {
    return (
      <Element className="scroll" name={`scroll_${index}`}>
        {/*渲染分节标题*/}
        {
          houses ? <ActivityTitle id={index} {...houses} /> : ''
        }
        {/*渲染banner*/}
        {
          image ? <ActivityBanner image={image} {...text} /> : ''
        }
        {/*渲染房源列表*/}
        {
          houses ? <ActivityHouses list={houses.houses.houses} ai={this.props.ai} showMore /> : ''
        }
      </Element>
    )
  };

  renderChildren = (data, index) => {
    switch (data.type) {
      case 5: {
        return <ActivityTitle {...data} />;
      }
      case 6: {
        return this.renderSection(data, index);
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

    const navList = this.props.ains.filter(({ type }) => type === 8);

    const contents = this.props.ains.filter(({ type }) => !([1, 2, 4].includes(type))).reduce((total, current, index, source) => {
      if (current.type === 7 && index === 0) {
        total.push(current);
      } else if (current.type === 7) {
        total[total.length - 1].text = current;
      } else if (current.type === 8) {
        total[total.length - 1].houses = current;
      } else {
        total.push(current);
      }

      return total;
    }, []);

    return (
      <div className={classnames('lg-only', Style.activity)}>
        <Nav search black fixed className={classnames(Nav.Style.index, 'dashboard')} />
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
        <ActivityNav fixed={this.state.navFixed} list={navList} current={Number((typeof window === 'undefined' ? '0' : location.hash || '').replace(/^#/, ''))} />
        {
          contents.map(this.renderChildren).filter(elem => !!elem).map((element, key) => cloneElement(element, {
            key
          }))
        }
      </div>
    )
  }
}
