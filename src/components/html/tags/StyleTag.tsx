import DomInterface from "../DomInterface";
import Tag from "../Tag";

const StyleTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="style" />
    </div>
    <div className="html-tag-content">
      <div>Contains style information for a document.</div>
      <table className="table-auto">
        <tbody className="text-sm">
          <tr>
            <td className="html-cell-label">Permitted Content</td>
            <td>Text content of type text/css</td>
          </tr>
          <tr>
            <td className="html-cell-label">DOM interface</td>
            <td>
              <DomInterface element="HTMLStyleElement" />
            </td>
          </tr>
          <tr>
            <td className="html-cell-label">Attributes</td>
            <td>media title nonce</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default StyleTag;
