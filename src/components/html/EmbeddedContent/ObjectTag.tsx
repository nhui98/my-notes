import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const ObjectTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="object" />
    </div>

    <div className="html-tag-content">
      <div>
        Represents an external resource, which can be treated as an image, a
        nested browsing context, or a resource to be handled by a plugin.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLObjectElement" />
          </TableRow>
          <TableRow label="Permitted ARIA Role">
            <AriaRole role="application" /> <AriaRole role="document" />{" "}
            <AriaRole role="image" />
          </TableRow>
          <TableRow label="Attributes">
            data form height name type usemap width
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default ObjectTag;
