import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
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
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLButtonElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="button" />
          </TableRow>
          <TableRow label="Permitted ARIA Role">
            <AriaRole role="checkbox" /> <AriaRole role="link" />{" "}
            <AriaRole role="menuitem" /> <AriaRole role="menuitemcheckbox" />{" "}
            <AriaRole role="menuitemradio" /> <AriaRole role="option" />{" "}
            <AriaRole role="radio" /> <AriaRole role="switch" />{" "}
            <AriaRole role="tab" />
          </TableRow>
          <TableRow label="Attributes">
            autofocus disabled form formaction formenctype formmethod
            formonvalidate formtarget name type value
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default ButtonTag;
