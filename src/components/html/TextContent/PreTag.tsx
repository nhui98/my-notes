import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const PreTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="pre" />
    </div>

    <div className="html-tag-content">
      <div>
        Represents preformatted text which is to be presented exactly as written
        in the HTML file.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLPreElement" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default PreTag;
