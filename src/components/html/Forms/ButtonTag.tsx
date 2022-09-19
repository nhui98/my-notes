import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const ButtonTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="button" />
    </div>
    <div className="html-tag-content">
      <div>
        Interactive element activated by a user with a mouse, keyboard, finger,
        voice command, or other assistive technology. Once activated, it then
        performs a programmable action.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLButtonElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA role</td>
            <td className="html-cell-details">
              <AriaRole role="button" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Permitted ARIA roles</td>
            <td className="html-cell-details">
              <AriaRole role="checkbox" /> <AriaRole role="link" />{" "}
              <AriaRole role="menuitem" /> <AriaRole role="menuitemcheckbox" />{" "}
              <AriaRole role="menuitemradio" /> <AriaRole role="option" />{" "}
              <AriaRole role="radio" /> <AriaRole role="switch" />{" "}
              <AriaRole role="tab" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">
              autofocus disabled form formaction formenctype formmethod
              formonvalidate formtarget name type value
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default ButtonTag;
