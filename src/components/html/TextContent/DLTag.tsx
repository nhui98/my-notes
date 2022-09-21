import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const DLTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="dl" />
    </div>

    <div className="html-tag-content">
      <div>
        Represents a description list. The element encloses a list of groups of
        terms (specified using the <Tag tag="dt" /> element) and descriptions
        (provided by <Tag tag="dd" /> elements)
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLDListElement" />
          </TableRow>
          <TableRow label="Permitted ARIA Role">
            <AriaRole role="group" /> <AriaRole role="list" />{" "}
            <AriaRole role="none" /> <AriaRole role="presentation" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default DLTag;
