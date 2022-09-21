import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const FieldsetTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="fieldset" />
    </div>
    <div className="html-tag-content">
      <div>
        Used to group several controls as well as labels (<Tag tag="label" />)
        within a web form.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLFieldSetElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="group" />
          </TableRow>
          <TableRow label="Permitted ARIA Role">
            <AriaRole role="radiogroup" /> <AriaRole role="presentation" />{" "}
            <AriaRole role="none" />
          </TableRow>
          <TableRow label="Attributes">disabled form name</TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default FieldsetTag;
