import DomInterface from "../DomInterface";
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
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLLegendElement" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default LegendTag;
