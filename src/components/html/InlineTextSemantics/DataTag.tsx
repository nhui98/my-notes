import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const DataTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="data" />
    </div>

    <div className="html-tag-content">
      <div>
        Links a given piece of content with a machine-readable translation. If
        the content is time- or date-related, the <Tag tag="time" /> element
        must be used.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLDataElement" />
          </TableRow>
          <TableRow label="Attributes">value</TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default DataTag;
