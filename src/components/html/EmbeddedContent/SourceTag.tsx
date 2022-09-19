import DomInterface from "../DomInterface";
import Tag from "../Tag";

const SourceTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="source" />
    </div>

    <div className="html-tag-content">
      <div>
        Specifies multiple media resources for the <Tag tag="picture" />, the{" "}
        <Tag tag="audio" /> element, or the <Tag tag="video" /> element. It is
        an empty element, meaning that it has no content and does not have a
        closing tag. It is commonly used to offer the same media content in
        multiple file formats in order to provide compatibility with a broad
        range of browsers given their differing support for image file formats
        and media file formats.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLSourceElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">
              type src srcset sizes media height width
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default SourceTag;
