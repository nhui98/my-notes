import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const DDTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="dd" />
    </div>

    <div className="html-tag-content">
      <div>
        Provides the description, definition, or value for the preceding term (
        <Tag tag="dt" />) in a description list (<Tag tag="dl" />)
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="definition" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default DDTag;
