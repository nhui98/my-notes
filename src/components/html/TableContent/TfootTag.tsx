import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const TfootTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="tfoot" />
    </div>
    <div className="html-tag-content">
      <div>Defines a set of rows summarizing the columns of the table.</div>
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

export default TfootTag;
