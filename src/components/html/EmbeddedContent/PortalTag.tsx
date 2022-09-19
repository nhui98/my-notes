import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const PortalTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="portal" />
    </div>

    <div className="html-tag-content">
      <div>
        enables the embedding of another HTML page into the current one for the
        purposes of allowing smoother navigation into new pages.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLPortalElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA role</td>
            <td className="html-cell-details">
              <AriaRole role="button" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">referrerpolicy src</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default PortalTag;
