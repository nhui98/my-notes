import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const ATag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="a" />
    </div>

    <div className="html-tag-content">
      <div>
        Creates a hyperlink to web pages, files, email addresses, locations in
        the same page, or anything else a URL can address.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLAnchorElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="link" /> when href attribue is present
          </TableRow>
          <TableRow label="Permitted ARIA Role">
            <AriaRole role="button" /> <AriaRole role="checkbox" />{" "}
            <AriaRole role="menuitem" /> <AriaRole role="menuitemradio" />{" "}
            <AriaRole role="menuitemradio" /> <AriaRole role="option" />{" "}
            <AriaRole role="radio" /> <AriaRole role="switch" />{" "}
            <AriaRole role="tab" /> <AriaRole role="treeitem" />
          </TableRow>
          <TableRow label="Attributes">
            href hreflang download referrerpolicy rel target type
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default ATag;
