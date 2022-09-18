import DomInterface from "../DomInterface";
import Tag from "../Tag";

const PreTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="pre" />
    </div>

    <div className="html-tag-content">
      <div>
        Represents preformatted text which is to be presented exactly as written
        in the HTML file.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLPreElement" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default PreTag;
