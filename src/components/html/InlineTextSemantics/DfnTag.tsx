import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const DfnTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="dfn" />
    </div>

    <div className="html-tag-content">
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
        nihil quisquam hic aliquid unde sapiente exercitationem animi suscipit
        quasi dicta?
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA role</td>
            <td className="html-cell-details">
              <AriaRole role="term" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">title</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default DfnTag;
