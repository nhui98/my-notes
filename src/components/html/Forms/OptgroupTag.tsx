import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const OptgroupTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="optgroup" />
    </div>
    <div className="html-tag-content">
      <div>
        Creates a grouping of options within a <Tag tag="select" /> element.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLOptGroupElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA role</td>
            <td className="html-cell-details">
              <AriaRole role="group" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">disabled label</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default OptgroupTag;
