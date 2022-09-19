import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
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
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLDataElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">value</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default DataTag;
