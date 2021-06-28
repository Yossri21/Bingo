import React from 'react';
import TableRow from './TableRow';

function Table({ theadData, tbodyData, customClass, func }) {
  const divStyle = {
    table: {
      color: 'black',
      borderStyle: 'Solid',
    },
  };

  return (
    <table style={divStyle}>
      <tbody>
        {tbodyData.map(item => {
          return <TableRow key={item.id} data={item} fullData={tbodyData} func={func} />;
        })}
      </tbody>
    </table>
  );
}

export default Table;
