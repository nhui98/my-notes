import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const OptionTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="option" />
    </div>
    <div className="html-tag-content">
      <div>
        Define an item contained in a <Tag tag="select" />, an{" "}
        <Tag tag="optgroup" />, or a <Tag tag="datalist" /> element. As such,{" "}
        <Tag tag="option" /> can represent menu items in popups and other lists
        of items in an HTML document.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLOptionElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA role</td>
            <td className="html-cell-details">
              <AriaRole role="option" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">disabled label selected value</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default OptionTag;
