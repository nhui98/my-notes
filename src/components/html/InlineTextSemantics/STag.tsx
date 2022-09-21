import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const STag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="s" />
    </div>

    <div className="html-tag-content">
      <div>
        Renders text with a strikethrough, or a line through it. Not appropriate
        when indicating document edits; for that, use the <Tag tag="del" /> and{" "}
        <Tag tag="ins" /> elements, as appropriate.
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

export default STag;
