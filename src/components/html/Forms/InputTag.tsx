import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const InputTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="input" />
    </div>
    <div className="html-tag-content">
      <div>
        Used to create interactive controls for web-based forms in order to
        accept data from the user.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLInputElement" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default InputTag;
