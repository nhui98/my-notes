import DomInterface from "../DomInterface";
import Tag from "../Tag";

const StrongTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="strong" />
    </div>

    <div className="html-tag-content">
      <div>
        Indicates that its contents have strong importance, seriousness, or
        urgency.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLElement" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default StrongTag;
