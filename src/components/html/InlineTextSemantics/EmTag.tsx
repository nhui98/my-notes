import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const EmTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="em" />
    </div>

    <div className="html-tag-content">
      <div>Marks text that has stress emphasis.</div>
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

export default EmTag;
