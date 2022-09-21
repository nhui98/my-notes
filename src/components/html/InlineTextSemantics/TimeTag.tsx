import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const TimeTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="time" />
    </div>

    <div className="html-tag-content">
      <div>
        Represents a specific period in time. It may include the datetime
        attribute to translate dates into machine-readable format, allowing for
        better search engine results or custom features such as reminders.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLTimeElement" />
          </TableRow>
          <TableRow label="Attributes">datetime</TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default TimeTag;
