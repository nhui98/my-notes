import DomInterface from "../DomInterface";
import Tag from "../Tag";

const SpanTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="span" />
    </div>

    <div className="html-tag-content">
      <div>generic inline container for phrasing content.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLSpanElement" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default SpanTag;
