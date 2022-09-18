import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const BodyTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="body" />
    </div>
    <div className="html-tag-content">
      <div>Represents the content of a HTML document.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td>
              <DomInterface element="HTMLBodyElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA role</td>
            <td>
              <AriaRole role="generic" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td>onblur onfocus onerror onload onunload onresize</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default BodyTag;
