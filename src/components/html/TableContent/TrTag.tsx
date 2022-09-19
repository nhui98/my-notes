import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const TrTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="tr" />
    </div>
    <div className="html-tag-content">
      <div>Defines a row of cells in a table.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLTableRowElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA Role</td>
            <td className="html-cell-details">
              <AriaRole role="row" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default TrTag;
