import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const PTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="p" />
    </div>

    <div className="html-tag-content">
      <div>Represents a paragraph.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLParagraphElement" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default PTag;
