import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const TfootTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="tfoot" />
    </div>
    <div className="html-tag-content">
      <div>Defines a set of rows summarizing the columns of the table.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLTableSectionElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA Role</td>
            <td className="html-cell-details">
              <AriaRole role="rowgroup" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default TfootTag;
