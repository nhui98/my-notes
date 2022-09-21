import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
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
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLMetaElement" />
          </TableRow>
          <TableRow label="Attributes">
            name content http-equiv charset
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default MetaTag;
