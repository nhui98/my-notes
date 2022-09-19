import DomInterface from "../DomInterface";
import Tag from "../Tag";

const AbbrTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="abbr" />
    </div>

    <div className="html-tag-content">
      <div>Represents an abbreviation or acronym.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">title</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default AbbrTag;
