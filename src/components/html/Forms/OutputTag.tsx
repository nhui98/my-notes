import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const OutputTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="output" />
    </div>
    <div className="html-tag-content">
      <div>
        Container element into which a site or app can inject the results of a
        calculation or the outcome of a user action.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLOutputElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="status" />
          </TableRow>
          <TableRow label="Attributes">for form name</TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default OutputTag;
