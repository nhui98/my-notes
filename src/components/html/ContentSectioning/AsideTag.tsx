import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const AsideTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="aside" />
    </div>
    <div className="html-tag-content">
      <div>
        Represents a portion of a document whose content is only indirectly
        related to the document&apos;s main content.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="complementary" />
          </TableRow>
          <TableRow label="Permitted ARIA Role">
            <AriaRole role="feed" /> <AriaRole role="none" />{" "}
            <AriaRole role="note" /> <AriaRole role="presentation" />{" "}
            <AriaRole role="region" /> <AriaRole role="search" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default AsideTag;
