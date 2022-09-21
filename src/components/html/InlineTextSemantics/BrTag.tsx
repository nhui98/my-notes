import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const BrTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="br" />
    </div>

    <div className="html-tag-content">
      <div>Produces a line break in text (carriage-return)</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLBRElement" />
          </TableRow>
          <TableRow label="Permitted ARIA Role">
            <AriaRole role="none" /> <AriaRole role="presentation" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default BrTag;
