import DomInterface from "../DomInterface";
import Tag from "../Tag";

const DelTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="del" />
    </div>
    <div className="html-tag-content">
      <div>
        Represents a range of text that has been deleted from a document.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLModElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">cite datetime</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default DelTag;
