import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const HtmlTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="html" />
    </div>

    <div className="html-tag-content">
      <div>Root element of a HTML document.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td>
              <DomInterface element="HTMLHtmlElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA role</td>
            <td>
              <AriaRole role="document" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default HtmlTag;
