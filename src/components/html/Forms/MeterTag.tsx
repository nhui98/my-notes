import DomInterface from "../DomInterface";
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
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLMeterElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">value mn max low high optimum</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default MeterTag;
