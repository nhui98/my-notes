import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const HeaderTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="header" />
    </div>
    <div className="html-tag-content">
      <div>
        Represents introductory content, typically a group of introductory or
        navigational aids.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="banner" />, no corresponding role
          </TableRow>
          <TableRow label="Permitted ARIA Role">
            <AriaRole role="group" /> <AriaRole role="presentation" />{" "}
            <AriaRole role="none" />{" "}
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default HeaderTag;
