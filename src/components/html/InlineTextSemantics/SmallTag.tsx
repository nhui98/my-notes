import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const SmallTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="small" />
    </div>

    <div className="html-tag-content">
      <div>
        Represents side-comments and small print, like copyright and legal text,
        independent of its styled presentation.
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

export default SmallTag;
