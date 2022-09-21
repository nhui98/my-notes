import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const MarkTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="mark" />
    </div>

    <div className="html-tag-content">
      <div>
        Represents text which is marked or highlighted for reference or notation
        purposes, due to the marked passage&apos;s relevance or importance in
        the enclosing context.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLElement" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default MarkTag;
