import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const BlockquoteTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="blockquote" />
    </div>

    <div className="html-tag-content">
      <div>
        Indicate that the enclosed text is an extended quotation. A URL for the
        source of the quotation may be given using the cite attribute, while a
        text representation of the source can be given using the{" "}
        <Tag tag="cite" /> element
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLQuoteElement" />
          </TableRow>
          <TableRow label="Attributes">cite</TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default BlockquoteTag;
