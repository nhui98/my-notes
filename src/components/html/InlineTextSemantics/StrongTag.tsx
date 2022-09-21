import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const StrongTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="strong" />
    </div>

    <div className="html-tag-content">
      <div>
        Indicates that its contents have strong importance, seriousness, or
        urgency.
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

export default StrongTag;
