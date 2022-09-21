import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const LegendTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="legend" />
    </div>
    <div className="html-tag-content">
      <div>
        Represents a caption for the content of its parent{" "}
        <Tag tag="fieldset" />.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLLegendElement" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default LegendTag;
