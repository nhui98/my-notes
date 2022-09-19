import DomInterface from "../DomInterface";
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
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLElement" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default AddressTag;
