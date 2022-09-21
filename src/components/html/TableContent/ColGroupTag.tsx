import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const ColGroupTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="colgroup" />
    </div>
    <div className="html-tag-content">
      <div>Defines a group of columns within a table.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLTableColElement" />
          </TableRow>
          <TableRow label="Attributes">span</TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default ColGroupTag;
