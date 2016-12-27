// Empty组件,自动判断children的长度,如果为0,则显示空的提示
import React, { Component, PropTypes } from 'react';
import Style from './index.less';

export default class Empty extends Component {
  Fill = (title) => (
    <div className={Style.empty}>
      {
        typeof title === 'string' ?
          (
            <div className={Style.content}>
              {title}
            </div>
          ) : title
      }
    </div>
  );

  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
  };

  render() {
    return (
      <div>
        {this.props.children || this.Fill(this.props.title)}
      </div>
    );
  }
}

