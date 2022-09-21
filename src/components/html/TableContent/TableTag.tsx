import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const TableTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="table" />
    </div>
    <div className="html-tag-content">
      <div>Represents tabular data.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLTableElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="table" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default TableTag;
