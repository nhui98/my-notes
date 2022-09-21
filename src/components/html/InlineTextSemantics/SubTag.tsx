import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const SubTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="sub" />
    </div>

    <div className="html-tag-content">
      <div>
        Specifies inline text which should be displayed as subscript for solely
        typographical reasons. Subscripts are typically rendered with a lowered
        baseline using smaller text.
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

export default SubTag;
