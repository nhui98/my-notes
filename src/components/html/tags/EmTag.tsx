import DomInterface from "../DomInterface";
import Tag from "../Tag";

const EmTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="em" />
    </div>

    <div className="html-tag-content">
      <div>Marks text that has stress emphasis.</div>
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

export default EmTag;
