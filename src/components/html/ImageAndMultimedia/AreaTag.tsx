import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const AreaTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="area" />
    </div>

    <div className="html-tag-content">
      <div>
        Defines an area inside an image map that has predefined clickable areas.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLAreaElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA role</td>
            <td className="html-cell-details">
              <AriaRole role="link" /> with href attribute
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">
              alt coords download href referrerpolicy rel shape target
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default AreaTag;
