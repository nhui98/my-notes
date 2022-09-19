import DomInterface from "../DomInterface";
import Tag from "../Tag";

const SubTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="sub" />
    </div>

    <div className="html-tag-content">
      <div>
        Specifies inline text which should be displayed as subscript for solely
        typographical reasons. Subscripts are typically rendered with a lowered
        baseline using smaller text.
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

export default SubTag;
