import DomInterface from "../DomInterface";
import Tag from "../Tag";

const TitleTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="title" />
    </div>
    <div className="html-tag-content">
      <div>
        Defines document&apos;s title shown in browser&apos;s title bar or a
        page&apos;s tab. Only contains text, ignores tags.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLTitleElement" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default TitleTag;
