import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const AreaTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="area" />
    </div>

    <div className="html-tag-content">
      <div>
        Defines an area inside an image map that has predefined clickable areas.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLAreaElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="link" /> with href attribute
          </TableRow>
          <TableRow label="Attributes">
            alt coords download href referrerpolicy rel shape target
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default AreaTag;
