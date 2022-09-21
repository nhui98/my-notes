import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const MeterTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="meter" />
    </div>
    <div className="html-tag-content">
      <div>
        Represents either a scalar value within a known range or a fractional
        value.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLMeterElement" />
          </TableRow>
          <TableRow label="Attributes">value mn max low high optimum</TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default MeterTag;
