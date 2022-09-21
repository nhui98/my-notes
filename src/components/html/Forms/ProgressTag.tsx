import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
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
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLProgressElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="progressbar" />
          </TableRow>
          <TableRow label="Attributes">max value</TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default ProgressTag;
