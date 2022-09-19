import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const DetailsTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="details" />
    </div>
    <div className="html-tag-content">
      <div>
        Creates a disclosure widget in which information is visible only when
        the widget is toggled into an open state. A summary or label must be
        provided using the <Tag tag="summary" /> element.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLDetailsElement" />
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
            <td className="html-cell-details">open</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default DetailsTag;
