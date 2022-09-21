import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const InputTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="input" />
    </div>
    <div className="html-tag-content">
      <div>
        Used to create interactive controls for web-based forms in order to
        accept data from the user.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLInputElement" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default InputTag;
