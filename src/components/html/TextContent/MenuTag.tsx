import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const MenuTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="menu" />
    </div>

    <div className="html-tag-content">
      <div>
        Semantic alternative to <Tag tag="ul" />.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLMenuElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA role</td>
            <td className="html-cell-details">
              <AriaRole role="list" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Permitted ARIA roles</td>
            <td className="html-cell-details">
              <AriaRole role="directory" /> <AriaRole role="group" />{" "}
              <AriaRole role="listbox" /> <AriaRole role="menu" />{" "}
              <AriaRole role="menubar" /> <AriaRole role="none" />{" "}
              <AriaRole role="presentation" /> <AriaRole role="radiogroup" />{" "}
              <AriaRole role="tablist" /> <AriaRole role="toolbar" />{" "}
              <AriaRole role="tree" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default MenuTag;
