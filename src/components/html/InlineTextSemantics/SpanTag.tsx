import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const SpanTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="span" />
    </div>

    <div className="html-tag-content">
      <div>generic inline container for phrasing content.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLSpanElement" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default SpanTag;
