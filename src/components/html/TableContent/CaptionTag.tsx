import DomInterface from "../DomInterface";
import Tag from "../Tag";

const CaptionTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="caption" />
    </div>
    <div className="html-tag-content">
      <div>Specifies the caption (or title) of a table.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLTableCaptionElement" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default CaptionTag;
