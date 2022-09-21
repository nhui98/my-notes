import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const FigureTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="figure" />
    </div>

    <div className="html-tag-content">
      <div>
        Represents self-contained content, potentially with an optional caption,
        which is specified using the <Tag tag="figcaption" /> element. The
        figure, its caption, and its contents are referenced as a single unit.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="figure" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default FigureTag;
