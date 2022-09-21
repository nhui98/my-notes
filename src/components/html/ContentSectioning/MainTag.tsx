import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const MainTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="main" />
    </div>
    <div className="html-tag-content">
      <div>
        Represents the dominant content of the <Tag tag="body" /> of a document.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="main" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default MainTag;
