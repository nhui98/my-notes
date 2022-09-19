import DomInterface from "../DomInterface";
import Tag from "../Tag";

const ColTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="col" />
    </div>
    <div className="html-tag-content">
      <div>
        Defines a column within a table and is used for defining common
        semantics on all common cells. It is generally found within a{" "}
        <Tag tag="colgroup" /> element.
      </div>
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

export default ColTag;
