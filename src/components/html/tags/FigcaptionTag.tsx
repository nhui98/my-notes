import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const FigcaptionTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="figcaption" />
    </div>

    <div className="html-tag-content">
      <div>
        Represents a caption or legend describing the rest of the contents of
        its parent <Tag tag="figure" /> element.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLElement" />
            </td>
          </tr>

          <tr className="html-tag-trow">
            <td className="html-cell-label">Permitted ARIA roles</td>
            <td className="html-cell-details">
              <AriaRole role="group" /> <AriaRole role="none" />{" "}
              <AriaRole role="presentation" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default FigcaptionTag;
