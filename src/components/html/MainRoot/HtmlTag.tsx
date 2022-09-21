import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const HtmlTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="html" />
    </div>

    <div className="html-tag-content">
      <div>Root element of a HTML document.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLHtmlElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="document" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default HtmlTag;
