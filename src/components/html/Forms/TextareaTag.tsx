import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
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
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLTextAreaElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA role</td>
            <td className="html-cell-details">
              <AriaRole role="textbox" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">
              autocomplete autocorrect autofocus cols disabled form maxlength
              minlength name placeholder readonly required rows spellcheck wrap
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default TextareaTag;
