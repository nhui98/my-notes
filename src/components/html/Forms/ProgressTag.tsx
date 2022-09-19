import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const ProgressTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="progress" />
    </div>
    <div className="html-tag-content">
      <div>
        Displays an indicator showing the completion progress of a task,
        typically displayed as a progress bar.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLProgressElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA role</td>
            <td className="html-cell-details">
              <AriaRole role="progressbar" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">max value</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default ProgressTag;
