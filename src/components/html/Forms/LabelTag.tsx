import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const LabelTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="label" />
    </div>
    <div className="html-tag-content">
      <div>Represents a caption for an item in a user interface.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLLabelElement" />
          </TableRow>
          <TableRow label="Attributes">for</TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default LabelTag;
