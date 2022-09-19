import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const BrTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="br" />
    </div>

    <div className="html-tag-content">
      <div>Produces a line break in text (carriage-return)</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLBRElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Permitted ARIA roles</td>
            <td className="html-cell-details">
              <AriaRole role="none" /> <AriaRole role="presentation" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default BrTag;
