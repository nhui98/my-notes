import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const DivTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="div" />
    </div>

    <div className="html-tag-content">
      <div>
        Generic container for flow content. It has no effect on the content or
        layout.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLDivElement" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default DivTag;
