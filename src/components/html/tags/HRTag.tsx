import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const HRTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="hr" />
    </div>

    <div className="html-tag-content">
      <div>Represents a thematic break between paragraph-level elements.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLHRElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA role</td>
            <td className="html-cell-details">
              <AriaRole role="seperator" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Permitted ARIA roles</td>
            <td className="html-cell-details">
              <AriaRole role="presentation" /> <AriaRole role="none" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default HRTag;
