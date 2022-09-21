import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const DelTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="del" />
    </div>
    <div className="html-tag-content">
      <div>
        Represents a range of text that has been deleted from a document.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLModElement" />
          </TableRow>
          <TableRow label="Attributes">cite datetime</TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default DelTag;
