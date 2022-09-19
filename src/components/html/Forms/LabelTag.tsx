import DomInterface from "../DomInterface";
import Tag from "../Tag";

const LabelTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="label" />
    </div>
    <div className="html-tag-content">
      <div>Represents a caption for an item in a user interface.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLLabelElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">for</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default LabelTag;
