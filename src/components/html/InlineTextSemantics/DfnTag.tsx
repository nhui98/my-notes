import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const DfnTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="dfn" />
    </div>

    <div className="html-tag-content">
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
        nihil quisquam hic aliquid unde sapiente exercitationem animi suscipit
        quasi dicta?
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="term" />
          </TableRow>
          <TableRow label="Attributes">title</TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default DfnTag;
