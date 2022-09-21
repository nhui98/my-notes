import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const ThTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="th" />
    </div>
    <div className="html-tag-content">
      <div>Defines a cell as header of a group of table cells.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLTableCellElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="columnheader" /> | <AriaRole role="rowheader" />
          </TableRow>
          <TableRow label="Attributes">
            abbr colspan headers rowspan scope
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default ThTag;
