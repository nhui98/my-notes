import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
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
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLHeadElement" />
          </TableRow>
          <TableRow label="Permitted Content">
            <Tag tag="title" /> <Tag tag="base" /> <Tag tag="link" />{" "}
            <Tag tag="style" /> <Tag tag="meta" /> <Tag tag="script" />{" "}
            <Tag tag="noscript" /> <Tag tag="template" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default HeadTag;
