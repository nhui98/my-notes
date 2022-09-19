import DomInterface from "../DomInterface";
import Tag from "../Tag";

const ColGroupTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="colgroup" />
    </div>
    <div className="html-tag-content">
      <div>Defines a group of columns within a table.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLTableColElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">span</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default ColGroupTag;
