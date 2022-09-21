import TableRow from "../TableRow";
import Tag from "../Tag";

const MathTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="math" />
    </div>
    <div className="html-tag-content">
      <div>
        Top-level MathML element, used to write a single mathematical formula.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="Attributes">display</TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default MathTag;
