import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const EmbedTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="embed" />
    </div>

    <div className="html-tag-content">
      <div>
        Embeds external content at the specified point in the document. This
        content is provided by an external application or other source of
        interactive content such as a browser plug-in.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLEmbedElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Permitted ARIA Roles</td>
            <td className="html-cell-details">
              <AriaRole role="application" /> <AriaRole role="document" />{" "}
              <AriaRole role="img" /> <AriaRole role="none" />{" "}
              <AriaRole role="presentation" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">height src type width</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default EmbedTag;
