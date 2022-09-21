import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const CaptionTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="caption" />
    </div>
    <div className="html-tag-content">
      <div>Specifies the caption (or title) of a table.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLTableCaptionElement" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default CaptionTag;
