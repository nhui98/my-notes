import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
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
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLAnchorElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA role</td>
            <td className="html-cell-details">
              <AriaRole role="link" /> when href attribue is present
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Permitted ARIA roles</td>
            <td className="html-cell-details">
              <AriaRole role="button" /> <AriaRole role="checkbox" />{" "}
              <AriaRole role="menuitem" /> <AriaRole role="menuitemradio" />{" "}
              <AriaRole role="menuitemradio" /> <AriaRole role="option" />{" "}
              <AriaRole role="radio" /> <AriaRole role="switch" />{" "}
              <AriaRole role="tab" /> <AriaRole role="treeitem" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">
              href hreflang download referrerpolicy rel target type
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default ATag;
