import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const DTTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="dt" />
    </div>

    <div className="html-tag-content">
      <div>
        Specifies a term in a description or definition list, and as such must
        be used inside a <Tag tag="dl" /> element. It is usually followed by a{" "}
        <Tag tag="dd" /> element.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLElement" /> |{" "}
            <DomInterface element="HTMLSpanElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="term" />
          </TableRow>
          <TableRow label="Permitted ARIA Role">
            <AriaRole role="listitem" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default DTTag;
