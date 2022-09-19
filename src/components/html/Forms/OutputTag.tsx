import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const OutputTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="output" />
    </div>
    <div className="html-tag-content">
      <div>
        Container element into which a site or app can inject the results of a
        calculation or the outcome of a user action.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLOutputElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA role</td>
            <td className="html-cell-details">
              <AriaRole role="status" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">for form name</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default OutputTag;
