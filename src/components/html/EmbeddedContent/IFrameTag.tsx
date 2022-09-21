import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const IFrameTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="iframe" />
    </div>

    <div className="html-tag-content">
      <div>
        Represents a nested browsing context, embedding another HTML page into
        the current one.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLIFrameElement" />
          </TableRow>
          <TableRow label="Permitted ARIA Role">
            <AriaRole role="application" /> <AriaRole role="document" />{" "}
            <AriaRole role="img" /> <AriaRole role="none" />{" "}
            <AriaRole role="presentation" />
          </TableRow>
          <TableRow label="Attributes">
            allow allowfullscreen allowpaymentrequest csp fetchpriority height
            loading name referrerpolicy sandbox src srcdoc width
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default IFrameTag;
