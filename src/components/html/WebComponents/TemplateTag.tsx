import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const TemplateTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="template" />
    </div>
    <div className="html-tag-content">
      <div>
        Holding HTML that is not to be rendered immediately when a page is
        loaded but may be instantiated subsequently during runtime using
        JavaScript.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLTemplateElement" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default TemplateTag;
