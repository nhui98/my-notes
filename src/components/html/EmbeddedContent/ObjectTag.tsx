import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const ObjectTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="object" />
    </div>

    <div className="html-tag-content">
      <div>
        Represents an external resource, which can be treated as an image, a
        nested browsing context, or a resource to be handled by a plugin.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLObjectElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Permitted ARIA Role</td>
            <td className="html-cell-details">
              <AriaRole role="application" /> <AriaRole role="document" />{" "}
              <AriaRole role="image" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">
              data form height name type usemap width
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default ObjectTag;
