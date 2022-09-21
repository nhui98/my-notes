import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const CiteTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="cite" />
    </div>

    <div className="html-tag-content">
      <div>
        Used to describe a reference to a cited creative work, and must include
        the title of that work.
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

export default CiteTag;
