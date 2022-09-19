import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const DTTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="dt" />
    </div>

    <div className="html-tag-content">
      <div>
        Specifies a term in a description or definition list, and as such must
        be used inside a <Tag tag="dl" /> element. It is usually followed by a{" "}
        <Tag tag="dd" /> element.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLElement" /> |{" "}
              <DomInterface element="HTMLSpanElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA role</td>
            <td className="html-cell-details">
              <AriaRole role="term" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Permitted ARIA roles</td>
            <td className="html-cell-details">
              <AriaRole role="listitem" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default DTTag;
