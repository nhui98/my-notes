import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const DatalistTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="datalist" />
    </div>
    <div className="html-tag-content">
      <div>
        Contains a set of <Tag tag="option" /> elements that represent the
        permissible or recommended options available to choose from within other
        controls.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLDataListElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="listbox" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default DatalistTag;
