// 面包屑导航
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Card from '../Card';
import Style from './index.less';

const BrandNavItem = ({ children }) => (
  <li>{children}</li>
);

export default class BrandNav extends Component {
  static propTypes = {
    list: PropTypes.array,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
    render: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.element])
  };

  static defaultProps = {
    render: <span>&nbsp;>&nbsp;</span>
  };

  static Item = BrandNavItem;

  renderChildren = (item, index) => (
    <BrandNavItem key={index}>
      {
        (() => {
          const { render, list } = this.props;
          if (typeof render === 'function') return render(item);
          return <span>{item}{index === list.length - 1 ? '' : render}</span>
        })()
      }
    </BrandNavItem>
  );

  render() {
    const { children, list } = this.props;

    return (
      <Card className={Style.brand}>
        <ul>
          {
            children || list.map(this.renderChildren)
          }
        </ul>
      </Card>
    )
  }
}
