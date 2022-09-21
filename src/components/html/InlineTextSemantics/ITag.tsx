import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const ITag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="i" />
    </div>

    <div className="html-tag-content">
      <div>
        Represents a range of text that is set off from the normal text for some
        reason, such as idiomatic text, technical terms, taxonomical
        designations, among others.
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

export default ITag;
