import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const NavTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="nav" />
    </div>
    <div className="html-tag-content">
      <div>
        Represents a section of a page whose purpose is to provide navigation
        links, either within the current document or to other documents.
      </div>
      <table className="table-auto">
        <tbody className="text-sm">
          <tr>
            <td className="html-cell-label">Implicit ARIA role</td>
            <td>
              <AriaRole role="navigation" />
            </td>
          </tr>
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

export default NavTag;
