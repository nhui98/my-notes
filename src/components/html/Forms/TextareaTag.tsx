import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const TextareaTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="textarea" />
    </div>
    <div className="html-tag-content">
      <div>
        Represents a multi-line plain-text editing control, useful when you want
        to allow users to enter a sizeable amount of free-form text, for example
        a comment on a review or feedback form.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLTextAreaElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="textbox" />
          </TableRow>
          <TableRow label="Attributes">
            autocomplete autocorrect autofocus cols disabled form maxlength
            minlength name placeholder readonly required rows spellcheck wrap
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default TextareaTag;
