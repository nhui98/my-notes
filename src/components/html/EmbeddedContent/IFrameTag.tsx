import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const IFrameTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="iframe" />
    </div>

    <div className="html-tag-content">
      <div>
        Represents a nested browsing context, embedding another HTML page into
        the current one.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLIFrameElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Permitted ARIA Role</td>
            <td className="html-cell-details">
              <AriaRole role="application" /> <AriaRole role="document" />{" "}
              <AriaRole role="img" /> <AriaRole role="none" />{" "}
              <AriaRole role="presentation" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">
              allow allowfullscreen allowpaymentrequest csp fetchpriority height
              loading name referrerpolicy sandbox src srcdoc width
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default IFrameTag;
