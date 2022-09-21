import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const EmbedTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="embed" />
    </div>

    <div className="html-tag-content">
      <div>
        Embeds external content at the specified point in the document. This
        content is provided by an external application or other source of
        interactive content such as a browser plug-in.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLEmbedElement" />
          </TableRow>
          <TableRow label="Permitted ARIA Role">
            <AriaRole role="application" /> <AriaRole role="document" />{" "}
            <AriaRole role="img" /> <AriaRole role="none" />{" "}
            <AriaRole role="presentation" />
          </TableRow>
          <TableRow label="Attributes">height src type width</TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default EmbedTag;
