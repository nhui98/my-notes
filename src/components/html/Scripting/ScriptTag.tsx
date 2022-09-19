import DomInterface from "../DomInterface";
import Tag from "../Tag";

const ScriptTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="script" />
    </div>
    <div className="html-tag-content">
      <div>
        Used to embed executable code or data; this is typically used to embed
        or refer to JavaScript code.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLScriptElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">
              async crossorigin defer fetchpriority integrity nomodule nonce
              referrerpolicy src type
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default ScriptTag;
