import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const BodyTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="body" />
    </div>
    <div className="html-tag-content">
      <div>Represents the content of a HTML document.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLBodyElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="generic" />
          </TableRow>
          <TableRow label="Attributes">
            onafterprint onbeforeprint onbeforeunload onblur onfocus onerror
            onload onunload onresize onhashchange onmessage onoffline ononline
            on popstate onredo onstorage onundo onunload
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default BodyTag;
