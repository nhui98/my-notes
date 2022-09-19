import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const SelectTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="select" />
    </div>
    <div className="html-tag-content">
      <div>Represents a control that provides a menu of options.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLSelectElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA role</td>
            <td className="html-cell-details">
              <AriaRole role="combobox" /> | <AriaRole role="listbox" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Permitted ARIA roles</td>
            <td className="html-cell-details">
              <AriaRole role="menu" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">
              autocomplete autofocus disabled form multiple name required size
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default SelectTag;
