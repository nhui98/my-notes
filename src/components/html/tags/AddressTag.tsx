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
      <table className="table-auto">
        <tbody className="text-sm">
          <tr>
            <td className="html-cell-label">DOM interface</td>
            <td>
              <DomInterface element="HTMLElement" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default AddressTag;
