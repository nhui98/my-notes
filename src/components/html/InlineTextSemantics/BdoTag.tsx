import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const BdoTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="bdo" />
    </div>

    <div className="html-tag-content">
      <div>
        Overrides the current directionality of text, so that the text within is
        rendered in a different direction.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLElement" /> |{" "}
            <DomInterface element="HTMLSpanElement" />
          </TableRow>
          <TableRow label="Attributes">dir</TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default BdoTag;
