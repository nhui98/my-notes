import DomInterface from "../DomInterface";
import Tag from "../Tag";

const HeadTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="head" />
    </div>

    <div className="html-tag-content">
      <div>
        Contains machine-readable information (metadata) about the document.
      </div>
      <table className="table-auto">
        <tbody className="text-sm">
          <tr>
            <td className="html-cell-label">DOM Interface</td>
            <td>
              <DomInterface element="HTMLHeadElement" />
            </td>
          </tr>
          <tr>
            <td className="html-cell-label">Can Contain</td>
            <td>
              <Tag tag="title" /> <Tag tag="base" /> <Tag tag="link" />{" "}
              <Tag tag="style" /> <Tag tag="meta" /> <Tag tag="script" />{" "}
              <Tag tag="noscript" /> <Tag tag="template" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default HeadTag;
