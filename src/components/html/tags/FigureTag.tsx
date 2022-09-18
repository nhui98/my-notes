import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const FigureTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="figure" />
    </div>

    <div className="html-tag-content">
      <div>
        Represents self-contained content, potentially with an optional caption,
        which is specified using the <Tag tag="figcaption" /> element. The
        figure, its caption, and its contents are referenced as a single unit.
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
            <td className="html-cell-label">Implicit ARIA role</td>
            <td className="html-cell-details">
              <AriaRole role="figure" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default FigureTag;
