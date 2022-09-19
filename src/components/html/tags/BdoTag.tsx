import DomInterface from "../DomInterface";
import Tag from "../Tag";

const BdoTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="bdo" />
    </div>

    <div className="html-tag-content">
      <div>
        Overrides the current directionality of text, so that the text within is
        rendered in a different direction.
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
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">dir</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default BdoTag;
