import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const FooterTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="footer" />
    </div>
    <div className="html-tag-content">
      <div>
        Represents a footer for its nearest ancestor sectioning content or
        sectioning root element.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="contentinfo" />
          </TableRow>
          <TableRow label="Permitted ARIA Role">
            <AriaRole role="group" /> <AriaRole role="presentation" />{" "}
            <AriaRole role="none" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default FooterTag;
