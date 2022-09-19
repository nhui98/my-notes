import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
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
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA role</td>
            <td className="html-cell-details">
              <AriaRole role="article" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Permitted ARIA roles</td>
            <td className="html-cell-details">
              <AriaRole role="application" /> <AriaRole role="document" />{" "}
              <AriaRole role="feed" /> <AriaRole role="main" />{" "}
              <AriaRole role="none" /> <AriaRole role="presentation" />{" "}
              <AriaRole role="region" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default ArticleTag;
