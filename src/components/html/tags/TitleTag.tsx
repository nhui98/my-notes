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
      <table className="table-auto">
        <tbody className="text-sm">
          <tr>
            <td className="html-cell-label">DOM interface</td>
            <td>
              <DomInterface element="HTMLTitleElement" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default TitleTag;
