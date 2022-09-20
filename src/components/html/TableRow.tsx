import { NextPage } from "next";
import { ReactNode } from "react";

const TableRow: NextPage<TableRowProps> = ({ label, children }) => (
  <tr className="html-tag-trow">
    <td className="html-cell-label">{label}</td>
    <td className="html-cell-details">{children}</td>
  </tr>
);

export default TableRow;

interface TableRowProps {
  label: string;
  children: ReactNode;
}
