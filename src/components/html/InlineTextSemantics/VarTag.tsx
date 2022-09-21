import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const VarTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="var" />
    </div>

    <div className="html-tag-content">
      <div>
        Represents the name of a variable in a mathematical expression or a
        programming context.
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

export default VarTag;
