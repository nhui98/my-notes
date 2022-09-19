import DomInterface from "../DomInterface";
import Tag from "../Tag";

const STag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="s" />
    </div>

    <div className="html-tag-content">
      <div>
        Renders text with a strikethrough, or a line through it. Not appropriate
        when indicating document edits; for that, use the <Tag tag="del" /> and{" "}
        <Tag tag="ins" /> elements, as appropriate.
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

export default STag;
