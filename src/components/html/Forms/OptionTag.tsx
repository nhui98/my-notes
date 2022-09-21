import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const OptionTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="option" />
    </div>
    <div className="html-tag-content">
      <div>
        Define an item contained in a <Tag tag="select" />, an{" "}
        <Tag tag="optgroup" />, or a <Tag tag="datalist" /> element. As such,{" "}
        <Tag tag="option" /> can represent menu items in popups and other lists
        of items in an HTML document.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLOptionElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="option" />
          </TableRow>
          <TableRow label="Attributes">disabled label selected value</TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default OptionTag;
