import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const LinkTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="link" />
    </div>
    <div className="html-tag-content">
      <div>
        Specifies relationships between current document and external resources.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLLinkElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA role</td>
            <td className="html-cell-details">
              <AriaRole role="link" /> with href attribute
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">
              as crossorigin href hreflang imagesizes imagesrcset integrity
              media prefetch referrerpolicy rel sizes title type
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default LinkTag;
