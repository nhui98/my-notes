import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const PTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="p" />
    </div>

    <div className="html-tag-content">
      <div>Represents a paragraph.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLParagraphElement" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default PTag;
