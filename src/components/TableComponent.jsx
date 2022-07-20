import React from "react";

const TableComponent = ({ className, tHeader, tBody }) => {
  return (
    <table className={className}>
      <thead>
        <tr>
          {tHeader.map((header) => {
            return <th key={header.id}>{header.columnsName}</th>;
          })}
        </tr>
      </thead>
      <tbody>{tBody}</tbody>
    </table>
  );
};

export default TableComponent;
