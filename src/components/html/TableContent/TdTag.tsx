import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const TdTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="td" />
    </div>
    <div className="html-tag-content">
      <div>
        Encapsulates a set of table rows (<Tag tag="tr" /> elements), indicating
        that they comprise the body of the table (<Tag tag="table" />
        ).
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLTableCellElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="cell" />
          </TableRow>
          <TableRow label="Attributes">colspan headers rowspan</TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default TdTag;
