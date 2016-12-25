import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Style from './index.less';
import TableHeader from './header';
import TableContent from './body';

export default class Table extends Component {
  static propTypes = {
    dataSource: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    className: PropTypes.string
  };

  render() {
    return (
      <table className={classnames(Style.table, this.props.className)}>
        <TableHeader columns={this.props.columns} />
        <TableContent columns={this.props.columns} dataSource={this.props.dataSource} />
      </table>
    )
  }
}
