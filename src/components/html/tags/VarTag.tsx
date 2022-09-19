import DomInterface from "../DomInterface";
import Tag from "../Tag";

const VarTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="var" />
    </div>

    <div className="html-tag-content">
      <div>
        Represents the name of a variable in a mathematical expression or a
        programming context.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLElement" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default VarTag;
