import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const ArticleTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="article" />
    </div>

    <div className="html-tag-content">
      <div>
        Represents a self-contained composition in a document, page,
        application, or site, which is intended to be independently
        distributable or reusable (e.g., in syndication).
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="article" />
          </TableRow>
          <TableRow label="Permitted ARIA Role">
            <AriaRole role="application" /> <AriaRole role="document" />{" "}
            <AriaRole role="feed" /> <AriaRole role="main" />{" "}
            <AriaRole role="none" /> <AriaRole role="presentation" />{" "}
            <AriaRole role="region" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default ArticleTag;
