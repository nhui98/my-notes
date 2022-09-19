import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const TheadTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="thead" />
    </div>
    <div className="html-tag-content">
      <div>
        Defines a set of rows defining the head of the columns of the table.
      </div>
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

export default TheadTag;
