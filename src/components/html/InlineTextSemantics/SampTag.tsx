import DomInterface from "../DomInterface";
import Tag from "../Tag";

const SampTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="samp" />
    </div>

    <div className="html-tag-content">
      <div>
        Used to enclose inline text which represents sample (or quoted) output
        from a computer program.
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

export default SampTag;
