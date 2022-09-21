import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const TheadTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="thead" />
    </div>
    <div className="html-tag-content">
      <div>
        Defines a set of rows defining the head of the columns of the table.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLTableSectionElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="rowgroup" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default TheadTag;
