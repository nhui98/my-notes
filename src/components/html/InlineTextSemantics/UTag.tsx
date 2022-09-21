import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const UTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="u" />
    </div>

    <div className="html-tag-content">
      <div>
        Represents a span of inline text which should be rendered in a way that
        indicates that it has a non-textual annotation. This is rendered by
        default as a simple solid underline, but may be altered using CSS.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLElement" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default UTag;
