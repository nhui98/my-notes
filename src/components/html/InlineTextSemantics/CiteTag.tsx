import DomInterface from "../DomInterface";
import Tag from "../Tag";

const CiteTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="cite" />
    </div>

    <div className="html-tag-content">
      <div>
        Used to describe a reference to a cited creative work, and must include
        the title of that work.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLElement" /> |{" "}
              <DomInterface element="HTMLSpanElement" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default CiteTag;
