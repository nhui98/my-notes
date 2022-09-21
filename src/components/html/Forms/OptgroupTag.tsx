import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const OptgroupTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="optgroup" />
    </div>
    <div className="html-tag-content">
      <div>
        Creates a grouping of options within a <Tag tag="select" /> element.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLOptGroupElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="group" />
          </TableRow>
          <TableRow label="Attributes">disabled label</TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default OptgroupTag;
