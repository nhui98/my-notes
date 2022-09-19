import DomInterface from "../DomInterface";
import Tag from "../Tag";

const QTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="q" />
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
              <DomInterface element="HTMLQuoteElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">cite</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default QTag;
