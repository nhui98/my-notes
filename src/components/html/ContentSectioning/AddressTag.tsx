import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const AddressTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="address" />
    </div>

    <div className="html-tag-content">
      <div>
        Indicates that the enclosed HTML provides contact information for a
        person or people, or for an organization.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLElement" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default AddressTag;
