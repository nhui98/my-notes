import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const CodeTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="code" />
    </div>

    <div className="html-tag-content">
      <div>
        Displays its contents styled in a fashion intended to indicate that the
        text is a short fragment of computer code.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLElement" /> |{" "}
            <DomInterface element="HTMLSpanElement" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default CodeTag;
