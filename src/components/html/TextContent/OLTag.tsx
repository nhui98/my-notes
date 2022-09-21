import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const OLTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="ol" />
    </div>

    <div className="html-tag-content">
      <div>Represents an ordered list of items.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLOListElement" />
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
          <TableRow label="Attributes">reversed start type</TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default OLTag;
