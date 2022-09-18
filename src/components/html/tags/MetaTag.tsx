import DomInterface from "../DomInterface";
import Tag from "../Tag";

const MetaTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="meta" />
    </div>
    <div className="html-tag-content">
      <div>
        Represents metadata that cannot be represented by other HTML
        meta-related elements.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td>
              <DomInterface element="HTMLMetaElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td>name content http-equiv charset</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default MetaTag;
