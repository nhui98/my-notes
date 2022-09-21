import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const LITag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="li" />
    </div>

    <div className="html-tag-content">
      <div>
        represent an item in a list. It must be contained in a parent element:
        an ordered list (<Tag tag="ol" />
        ), an unordered list (<Tag tag="ul" />
        ), or a menu (<Tag tag="menu" />
        ).
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLLIElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="listitem" />
          </TableRow>
          <TableRow label="Permitted ARIA Role">
            <AriaRole role="menuitem" /> <AriaRole role="menuitemcheckbox" />{" "}
            <AriaRole role="menuitemradio" /> <AriaRole role="option" />{" "}
            <AriaRole role="none" /> <AriaRole role="presentation" />{" "}
            <AriaRole role="radio" /> <AriaRole role="seperator" />{" "}
            <AriaRole role="tab" /> <AriaRole role="treeitem" />
          </TableRow>
          <TableRow label="Attributes">value</TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default LITag;
