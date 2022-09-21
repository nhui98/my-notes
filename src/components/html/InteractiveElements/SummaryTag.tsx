import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const SummaryTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="summary" />
    </div>
    <div className="html-tag-content">
      <div>
        specifies a summary, caption, or legend for a <Tag tag="details" />{" "}
        element&apos;s disclosure box. Clicking the <Tag tag="summary" />{" "}
        element toggles the state of the parent <Tag tag="details" /> element
        open and closed.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="button" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default SummaryTag;
