import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const ColTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="col" />
    </div>
    <div className="html-tag-content">
      <div>
        Defines a column within a table and is used for defining common
        semantics on all common cells. It is generally found within a{" "}
        <Tag tag="colgroup" /> element.
      </div>
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

export default ColTag;
