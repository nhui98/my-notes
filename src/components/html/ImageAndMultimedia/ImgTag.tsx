import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const ImgTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="img" />
    </div>

    <div className="html-tag-content">
      <div>Embeds an image into the document.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLImageElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA role</td>
            <td className="html-cell-details">
              <AriaRole role="img" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Permitted ARIA roles</td>
            <td className="html-cell-details">
              <AriaRole role="button" /> <AriaRole role="checkbox" />{" "}
              <AriaRole role="link" /> <AriaRole role="menuitem" />{" "}
              <AriaRole role="menuitemcheckbox" />{" "}
              <AriaRole role="menuitemradio" /> <AriaRole role="option" />{" "}
              <AriaRole role="progressbar" /> <AriaRole role="scrollbar" />{" "}
              <AriaRole role="seperator" /> <AriaRole role="slider" />{" "}
              <AriaRole role="switch" /> <AriaRole role="tab" />{" "}
              <AriaRole role="treeitem" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">
              alt crossorigin decoding fetchpriority height ismap loading
              referrerpolicy sizes src srcset width usemap
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default ImgTag;
