import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const HeaderTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="header" />
    </div>
    <div className="html-tag-content">
      <div>
        Represents introductory content, typically a group of introductory or
        navigational aids.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA role</td>
            <td>
              <AriaRole role="banner" />, no corresponding role
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Permitted ARIA roles</td>
            <td>
              <AriaRole role="group" /> <AriaRole role="presentation" />{" "}
              <AriaRole role="none" />{" "}
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM interface</td>
            <td>
              <DomInterface element="HTMLElement" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default HeaderTag;
