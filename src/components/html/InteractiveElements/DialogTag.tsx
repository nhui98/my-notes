import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
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
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLDialogElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="dialog" />
          </TableRow>
          <TableRow label="Permitted ARIA Role">
            <AriaRole role="alertdialog" />
          </TableRow>
          <TableRow label="Attributes">open</TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default DialogTag;
