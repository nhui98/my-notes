import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const TableTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="table" />
    </div>
    <div className="html-tag-content">
      <div>Represents tabular data.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLTableElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA Role</td>
            <td className="html-cell-details">
              <AriaRole role="table" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default TableTag;
