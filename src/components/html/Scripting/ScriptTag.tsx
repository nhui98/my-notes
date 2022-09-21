import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const ScriptTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="script" />
    </div>
    <div className="html-tag-content">
      <div>
        Used to embed executable code or data; this is typically used to embed
        or refer to JavaScript code.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLScriptElement" />
          </TableRow>
          <TableRow label="Attributes">
            async crossorigin defer fetchpriority integrity nomodule nonce
            referrerpolicy src type
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default ScriptTag;
