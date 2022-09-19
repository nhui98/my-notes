import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const FieldsetTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="fieldset" />
    </div>
    <div className="html-tag-content">
      <div>
        Used to group several controls as well as labels (<Tag tag="label" />)
        within a web form.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLFieldSetElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA role</td>
            <td className="html-cell-details">
              <AriaRole role="group" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Permitted ARIA role</td>
            <td className="html-cell-details">
              <AriaRole role="radiogroup" /> <AriaRole role="presentation" />{" "}
              <AriaRole role="none" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">disabled form name</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default FieldsetTag;
