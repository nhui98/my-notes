import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const DetailsTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="details" />
    </div>
    <div className="html-tag-content">
      <div>
        Creates a disclosure widget in which information is visible only when
        the widget is toggled into an open state. A summary or label must be
        provided using the <Tag tag="summary" /> element.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLDetailsElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="group" />
          </TableRow>
          <TableRow label="Attributes">open</TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default DetailsTag;
