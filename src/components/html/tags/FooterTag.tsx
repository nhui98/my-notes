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
      <table className="table-auto">
        <tbody className="text-sm">
          <tr>
            <td className="html-cell-label">Implicit ARIA role</td>
            <td>
              <AriaRole role="contentinfo" />, no corresponding role
            </td>
          </tr>
          <tr>
            <td className="html-cell-label">Permitted ARIA roles</td>
            <td>
              <AriaRole role="group" /> <AriaRole role="presentation" />{" "}
              <AriaRole role="none" />
            </td>
          </tr>
          <tr>
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

export default FooterTag;
