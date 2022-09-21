import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const BdiTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="bdi" />
    </div>

    <div className="html-tag-content">
      <div>
        tells the browser&apos;s bidirectional algorithm to treat the text it
        contains in isolation from its surrounding text.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLElement" />
          </TableRow>
          <TableRow label="Attributes">dir</TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default BdiTag;
