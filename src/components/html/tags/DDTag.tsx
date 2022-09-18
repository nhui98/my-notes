import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const DDTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="dd" />
    </div>

    <div className="html-tag-content">
      <div>
        Provides the description, definition, or value for the preceding term (
        <Tag tag="dt" />) in a description list (<Tag tag="dl" />)
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
              <AriaRole role="definition" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default DDTag;
