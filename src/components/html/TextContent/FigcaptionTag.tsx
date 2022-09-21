import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const FigcaptionTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="figcaption" />
    </div>

    <div className="html-tag-content">
      <div>
        Represents a caption or legend describing the rest of the contents of
        its parent <Tag tag="figure" /> element.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLElement" />
          </TableRow>
          <TableRow label="Permitted ARIA Role">
            <AriaRole role="group" /> <AriaRole role="none" />{" "}
            <AriaRole role="presentation" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default FigcaptionTag;
