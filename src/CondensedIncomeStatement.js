import React from 'react';

const CondensedIncomeStatement = ({ data, highlight }) => {
  const highlightableRowIndex = data.rows.findIndex(row => row.highlightable);
  
  return (
    <table className="income-statement-table">
      <thead>
        <tr>
          <th className="label-column"></th>
          {data.header.map((col, index) => (
            <th key={index} className={index > 0 ? 'data-column' : ''}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, rowIndex) => (
          <tr 
            key={row.label} 
            className={highlight && rowIndex === highlightableRowIndex ? 'highlight-row' : ''}
          >
            <td className="label-column">
              <span className="row-label">{row.label}</span>
            </td>
            {/* The first data cell is for the Note column */}
            <td className="data-column note-value">{row.note}</td>
            {/* Remaining data cells */}
            {row.values.map((value, valueIndex) => (
              <td key={valueIndex} className="data-column">{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CondensedIncomeStatement;