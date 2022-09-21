import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const HeadingsTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="h1" />
      <Tag tag="h2" />
      <Tag tag="h3" />
      <Tag tag="h4" />
      <Tag tag="h5" />
      <Tag tag="h6" />
    </div>

    <div className="html-tag-content">
      <div>
        Represents six levels of section headings. <Tag tag="h1" /> is the
        highest section level and <Tag tag="h6" /> is the lowest.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLHeadingElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="heading" />
          </TableRow>
          <TableRow label="Permitted ARIA Role">
            <AriaRole role="tab" /> <AriaRole role="presentation" />{" "}
            <AriaRole role="none" />{" "}
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default HeadingsTag;
