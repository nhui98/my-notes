import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const DialogTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="dialog" />
    </div>
    <div className="html-tag-content">
      <div>
        Represents a dialog box or other interactive component, such as a
        dismissible alert, inspector, or subwindow.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLDialogElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA role</td>
            <td className="html-cell-details">
              <AriaRole role="dialog" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Permitted ARIA roles</td>
            <td className="html-cell-details">
              <AriaRole role="alertdialog" />
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

export default DialogTag;
