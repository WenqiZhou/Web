// 首页房源推荐
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import ItemsList from './items-list';
import './index.less';

export default class HouseWrapper extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      total: this.getPages(props.list)
    }
  }

  componentWillReceiveProps(np) {
    this.setState({
      total: this.getPages(np.list)
    });
  }

  getPages = (list) => {
    const length = list.length;
    const calc = Number(Number((length / 9)).toFixed(0));
    return length % 9 === 0 ? calc : (calc + 1);
  };

  render() {
    const { current, total } = this.state;
    return (
      <div
        className={classnames({
          houses: true,
          wrapper: true,
          [`pages_${total}`]: true
        })}
      >
        <div className="wrapper-list">
          {
            new Array(total).fill(1).map((i, index) => (
              <ItemsList key={index} list={this.props.list.slice(current * 9, ((current + 1) * 9) - 1)} />
            ))
          }
        </div>
        <div className="wrapper-navigation">
          {
            new Array(total).fill(1).map((i, index) => (
              <button key={index} />
            ))
          }
        </div>
      </div>
    )
  }
}
