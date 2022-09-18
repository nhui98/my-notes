import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const MainTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="main" />
    </div>
    <div className="html-tag-content">
      <div>
        Represents the dominant content of the <Tag tag="body" /> of a document.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA role</td>
            <td>
              <AriaRole role="main" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM interface</td>
            <td>
              <DomInterface element="HTMLElement" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default MainTag;
