import DomInterface from "../DomInterface";
import Tag from "../Tag";

const UTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="u" />
    </div>

    <div className="html-tag-content">
      <div>
        Represents a span of inline text which should be rendered in a way that
        indicates that it has a non-textual annotation. This is rendered by
        default as a simple solid underline, but may be altered using CSS.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="	HTMLElement" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default UTag;
