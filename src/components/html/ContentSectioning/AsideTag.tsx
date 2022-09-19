import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
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
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA role</td>
            <td className="html-cell-details">
              <AriaRole role="complementary" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Permitted ARIA roles</td>
            <td className="html-cell-details">
              <AriaRole role="feed" /> <AriaRole role="none" />{" "}
              <AriaRole role="note" /> <AriaRole role="presentation" />{" "}
              <AriaRole role="region" /> <AriaRole role="search" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default AsideTag;