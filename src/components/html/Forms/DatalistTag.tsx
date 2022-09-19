import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const DatalistTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="datalist" />
    </div>
    <div className="html-tag-content">
      <div>
        Contains a set of <Tag tag="option" /> elements that represent the
        permissible or recommended options available to choose from within other
        controls.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLDataListElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA role</td>
            <td className="html-cell-details">
              <AriaRole role="listbox" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default DatalistTag;
