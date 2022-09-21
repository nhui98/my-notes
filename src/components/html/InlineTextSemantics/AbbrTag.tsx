import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const AbbrTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="abbr" />
    </div>

    <div className="html-tag-content">
      <div>Represents an abbreviation or acronym.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLElement" />
          </TableRow>
          <TableRow label="Attributes">title</TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default AbbrTag;
