import React, { Component } from 'react';

export default class TableRow extends Component {

  /**
   * 渲染单元格
   * @param col 数据格式
   * @param row 数据
   */
  renderChildren = (col, row) => {
    const colData = col.dataSource ? row[col.dataSource] : row;

    if (typeof col.render === 'function') {
      return col.render(colData, row, this.props.index)
    }

    //console.log(colData,col)
    return <span>{colData}</span>;
  };

  render() {
    const { row, columns } = this.props;
    return (
      <tr>
        {
          columns.map((col, index) => (
            <td key={index}>{this.renderChildren(col, row)}</td>
          ))
        }
      </tr>
    )
  }
}
