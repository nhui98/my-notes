import DomInterface from "../DomInterface";
import Tag from "../Tag";

const MarkTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="mark" />
    </div>

    <div className="html-tag-content">
      <div>
        Represents text which is marked or highlighted for reference or notation
        purposes, due to the marked passage&apos;s relevance or importance in
        the enclosing context.
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

export default MarkTag;
