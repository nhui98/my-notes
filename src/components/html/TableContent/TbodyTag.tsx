import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const TbodyTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="tbody" />
    </div>
    <div className="html-tag-content">
      <div>
        Encapsulates a set of table rows (<Tag tag="tr" /> elements), indicating
        that they comprise the body of the table (<Tag tag="table" />
        ).
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLTableSectionElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="rowgroup" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default TbodyTag;
