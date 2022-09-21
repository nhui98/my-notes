import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const HRTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="hr" />
    </div>

    <div className="html-tag-content">
      <div>Represents a thematic break between paragraph-level elements.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLHRElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="seperator" />
          </TableRow>
          <TableRow label="Permitted ARIA Role">
            <AriaRole role="presentation" /> <AriaRole role="none" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default HRTag;
