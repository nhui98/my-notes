import DomInterface from "../DomInterface";
import Tag from "../Tag";

const StyleTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="style" />
    </div>
    <div className="html-tag-content">
      <div>Contains style information for a document.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLStyleElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Permitted Content</td>
            <td className="html-cell-details">Text content of type text/css</td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">media title nonce</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default StyleTag;
