import React from 'react';
import { clickTableCell } from '../../utils/utils';

function TableRow({ data, func, fullData }) {
  return (
    <tr>
      {data.items.map(item => {
        return (
          <td className="tdBingo" key={item.id}>
            <button
              className="btnBingo"
              style={{ backgroundColor: item.status === true ? 'green' : 'white', color: item.status === true ? '#fff' : '#000' }}
              onClick={() => {
                func(clickTableCell(item, data, fullData));
              }}
            >
              {item.name}
            </button>
          </td>
        );
      })}
    </tr>
  );
}

export default TableRow;
