import DomInterface from "../DomInterface";
import Tag from "../Tag";

const BdiTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="bdi" />
    </div>

    <div className="html-tag-content">
      <div>
        tells the browser&apos;s bidirectional algorithm to treat the text it
        contains in isolation from its surrounding text.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLElement" />
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

export default BdiTag;
