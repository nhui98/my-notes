import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const BTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="b" />
    </div>

    <div className="html-tag-content">
      <div>
        Used to draw the reader&apos;s attention to the element&apos;s contents
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

export default BTag;
