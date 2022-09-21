import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const TrTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="tr" />
    </div>
    <div className="html-tag-content">
      <div>Defines a row of cells in a table.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLTableRowElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="row" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default TrTag;
