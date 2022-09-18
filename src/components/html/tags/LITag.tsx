import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const LITag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="li" />
    </div>

    <div className="html-tag-content">
      <div>
        represent an item in a list. It must be contained in a parent element:
        an ordered list (<Tag tag="ol" />
        ), an unordered list (<Tag tag="ul" />
        ), or a menu (<Tag tag="menu" />
        ).
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLLIElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA role</td>
            <td className="html-cell-details">
              <AriaRole role="listitem" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Permitted ARIA roles</td>
            <td className="html-cell-details">
              <AriaRole role="menuitem" /> <AriaRole role="menuitemcheckbox" />{" "}
              <AriaRole role="menuitemradio" /> <AriaRole role="option" />{" "}
              <AriaRole role="none" /> <AriaRole role="presentation" />{" "}
              <AriaRole role="radio" /> <AriaRole role="seperator" />{" "}
              <AriaRole role="tab" /> <AriaRole role="treeitem" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">value</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default LITag;
