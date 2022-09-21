import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const PortalTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="portal" />
    </div>

    <div className="html-tag-content">
      <div>
        enables the embedding of another HTML page into the current one for the
        purposes of allowing smoother navigation into new pages.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLPortalElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="button" />
          </TableRow>
          <TableRow label="Attributes">referrerpolicy src</TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default PortalTag;
