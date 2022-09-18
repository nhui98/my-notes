import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const FooterTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="footer" />
    </div>
    <div className="html-tag-content">
      <div>
        Represents a footer for its nearest ancestor sectioning content or
        sectioning root element.
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
              <AriaRole role="contentinfo" />, no corresponding role
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Permitted ARIA roles</td>
            <td className="html-cell-details">
              <AriaRole role="group" /> <AriaRole role="presentation" />{" "}
              <AriaRole role="none" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default FooterTag;
