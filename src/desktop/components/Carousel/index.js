// 首页活动列表滚动组件
import React, { Component, PropTypes, cloneElement } from 'react';
import classnames from 'classnames';
import './index.less';

export default class Carousel extends Component {
  static propTypes = {
    children: PropTypes.array.isRequired,
    style: PropTypes.object,
    className: PropTypes.string
  };

  static defaultProps = {
    style: {},
    className: '',
    wrapperStyle: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      total: props.total || props.children.length || 0
    }
  }

  componentWillReceiveProps(np) {
    if (np.children !== this.props.children) {
      this.setState({
        total: np.children.length
      });
    }
  }

  step = 5.28;

  handleNext = () => {
    if (this.state.current < this.state.total - 3) {
      this.setState({
        current: this.state.current + 1
      });
    }
  };

  handlePrev = () => {
    if (this.state.current > 0) {
      this.setState({
        current: this.state.current - 1
      });
    }
  };

  render() {
    const { current, total } = this.state;

    return (
      <div
        className={
          classnames({
            carousel: true,
            [this.props.className]: true,
            [`items_${total}`]: true
          })
        }
        style={this.props.style}
      >
        <div className="carousel-navigation">
          <button className="page button" disabled={current === total - 3} onClick={this.handleNext}>
            <span className="icon prev" />
          </button>
          <button className="page button" disabled={current === 0} onClick={this.handlePrev}>
            <span className="icon next" />
          </button>
        </div>
        <div className="carousel-list" style={this.state.wrapperStyle}>
          <div
            className="list"
            style={{
              marginLeft: `-${this.step * current}rem`
            }}
          >
            {
              this.props.children.map((child) => cloneElement(child, {
                className: 'carousel-item'
              }))
            }
          </div>
        </div>
      </div>
    )
  }
}
