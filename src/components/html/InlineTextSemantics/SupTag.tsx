import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const SupTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="sup" />
    </div>

    <div className="html-tag-content">
      <div>
        Specifies inline text which is to be displayed as superscript for solely
        typographical reasons. Superscripts are usually rendered with a raised
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

export default SupTag;
