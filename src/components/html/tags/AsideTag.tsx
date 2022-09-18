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
            <td className="html-cell-label">Implicit ARIA role</td>
            <td>
              <AriaRole role="complementary" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Permitted ARIA roles</td>
            <td>
              <AriaRole role="feed" /> <AriaRole role="none" />{" "}
              <AriaRole role="note" /> <AriaRole role="presentation" />{" "}
              <AriaRole role="region" /> <AriaRole role="search" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM interface</td>
            <td>
              <DomInterface element="HTMLElement" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default AsideTag;
