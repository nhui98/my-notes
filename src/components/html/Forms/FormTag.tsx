import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const FormTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="form" />
    </div>
    <div className="html-tag-content">
      <div>
        Represents a document section containing interactive controls for
        submitting information.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLFormElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="form" />
          </TableRow>
          <TableRow label="Permitted ARIA Role">
            <AriaRole role="search" /> <AriaRole role="none" />{" "}
            <AriaRole role="presentation" />
          </TableRow>
          <TableRow label="Attributes">
            accept-charset autocomplete name rel action enctype method
            novalidate target
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default FormTag;
