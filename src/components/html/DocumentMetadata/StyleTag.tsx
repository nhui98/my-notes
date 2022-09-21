import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const StyleTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="style" />
    </div>
    <div className="html-tag-content">
      <div>Contains style information for a document.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLStyleElement" />
          </TableRow>
          <TableRow label="Attributes">media title nonce</TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default StyleTag;
