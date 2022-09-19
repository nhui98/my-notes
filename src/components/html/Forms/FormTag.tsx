import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
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
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLFormElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA role</td>
            <td className="html-cell-details">
              <AriaRole role="form" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Permitted ARIA roles</td>
            <td className="html-cell-details">
              <AriaRole role="search" /> <AriaRole role="none" />{" "}
              <AriaRole role="presentation" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">
              accept-charset autocomplete name rel action enctype method
              novalidate target
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default FormTag;
