import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const MenuTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="menu" />
    </div>

    <div className="html-tag-content">
      <div>
        Semantic alternative to <Tag tag="ul" />.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLMenuElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="list" />
          </TableRow>
          <TableRow label="Permitted ARIA Role">
            <AriaRole role="directory" /> <AriaRole role="group" />{" "}
            <AriaRole role="listbox" /> <AriaRole role="menu" />{" "}
            <AriaRole role="menubar" /> <AriaRole role="none" />{" "}
            <AriaRole role="presentation" /> <AriaRole role="radiogroup" />{" "}
            <AriaRole role="tablist" /> <AriaRole role="toolbar" />{" "}
            <AriaRole role="tree" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default MenuTag;
