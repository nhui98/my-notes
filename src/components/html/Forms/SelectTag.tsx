import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const SelectTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="select" />
    </div>
    <div className="html-tag-content">
      <div>Represents a control that provides a menu of options.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLSelectElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="combobox" /> | <AriaRole role="listbox" />
          </TableRow>
          <TableRow label="Permitted ARIA Role">
            <AriaRole role="menu" />
          </TableRow>
          <TableRow label="Attributes">
            autocomplete autofocus disabled form multiple name required size
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default SelectTag;
