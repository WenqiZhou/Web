import React from 'react';

const TableHeader = ({ columns }) => (
  <thead>
  <tr>
  {
    columns.map(({ title, width }, index) => (
      <td
        key={index}
        style={{
          width
        }}
      >
        <span>{title}</span>
      </td>
    ))
  }
  </tr>
  </thead>
);

export default TableHeader;
