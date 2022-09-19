import DomInterface from "../DomInterface";
import Tag from "../Tag";

const SmallTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="small" />
    </div>

    <div className="html-tag-content">
      <div>
        Represents side-comments and small print, like copyright and legal text,
        independent of its styled presentation.
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

export default SmallTag;
