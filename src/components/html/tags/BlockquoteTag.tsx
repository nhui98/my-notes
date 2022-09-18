import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const BlockquoteTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="blockquote" />
    </div>

    <div className="html-tag-content">
      <div>
        Indicate that the enclosed text is an extended quotation. A URL for the
        source of the quotation may be given using the cite attribute, while a
        text representation of the source can be given using the{" "}
        <Tag tag="cite" /> element
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

export default BlockquoteTag;
