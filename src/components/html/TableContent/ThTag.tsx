import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const ThTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="th" />
    </div>
    <div className="html-tag-content">
      <div>Defines a cell as header of a group of table cells.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLTableCellElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA Role</td>
            <td className="html-cell-details">
              <AriaRole role="columnheader" /> | <AriaRole role="rowheader" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">
              abbr colspan headers rowspan scope
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default ThTag;
