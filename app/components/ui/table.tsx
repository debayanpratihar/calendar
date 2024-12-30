import React from 'react';

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {}

export const Table: React.FC<TableProps> = ({ children, ...props }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200" {...props}>
      {children}
    </table>
  );
};

interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

export const TableHead: React.FC<TableHeadProps> = ({ children, ...props }) => {
  return (
    <thead className="bg-gray-50" {...props}>
      {children}
    </thead>
  );
};

interface TableHeaderProps extends React.ThHTMLAttributes<HTMLTableCellElement> {}

export const TableHeader: React.FC<TableHeaderProps> = ({ children, ...props }) => {
  return (
    <th
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      {...props}
    >
      {children}
    </th>
  );
};

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

export const TableBody: React.FC<TableBodyProps> = ({ children, ...props }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200" {...props}>
      {children}
    </tbody>
  );
};

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {}

export const TableRow: React.FC<TableRowProps> = ({ children, ...props }) => {
  return (
    <tr {...props}>
      {children}
    </tr>
  );
};

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {}

export const TableCell: React.FC<TableCellProps> = ({ children, ...props }) => {
  return (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" {...props}>
      {children}
    </td>
  );
};