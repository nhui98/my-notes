import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const DivTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="div" />
    </div>

    <div className="html-tag-content">
      <div>
        Generic container for flow content. It has no effect on the content or
        layout.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLDivElement" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default DivTag;
