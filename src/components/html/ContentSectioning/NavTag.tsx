import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const NavTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="nav" />
    </div>
    <div className="html-tag-content">
      <div>
        Represents a section of a page whose purpose is to provide navigation
        links, either within the current document or to other documents.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="navigation" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default NavTag;
