import DomInterface from "../DomInterface";
import Tag from "../Tag";

const SupTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="sup" />
    </div>

    <div className="html-tag-content">
      <div>
        Specifies inline text which is to be displayed as superscript for solely
        typographical reasons. Superscripts are usually rendered with a raised
        baseline using smaller text.
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

export default SupTag;
