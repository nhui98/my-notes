import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const SlotTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="slot" />
    </div>
    <div className="html-tag-content">
      <div>
        Placeholder inside a web component that you can fill with your own
        markup, which lets you create separate DOM trees and present them
        together.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLSlotElement" />
          </TableRow>
          <TableRow label="Attributes">name</TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default SlotTag;
