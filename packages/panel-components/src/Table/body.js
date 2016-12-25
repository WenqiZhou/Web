import React, { Component } from 'react';
import TableRow from './row';

export default class TableBody extends Component {
  render() {
    const { dataSource, columns } = this.props;

    return (
      <tbody>
      {
        dataSource.map((data,index) => (
            <TableRow key={index} index={index} row={data} columns={columns} />
          )
        )
      }
      </tbody>
    )
  }
}
