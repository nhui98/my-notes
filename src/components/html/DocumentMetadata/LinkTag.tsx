import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const LinkTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="link" />
    </div>
    <div className="html-tag-content">
      <div>
        Specifies relationships between current document and external resources.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLLinkElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="link" /> with href attribute
          </TableRow>
          <TableRow label="Attributes">
            as crossorigin href hreflang imagesizes imagesrcset integrity media
            prefetch referrerpolicy rel sizes title type
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default LinkTag;
