import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const Template = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="" />
    </div>

    <div className="html-tag-content">
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
        nihil quisquam hic aliquid unde sapiente exercitationem animi suscipit
        quasi dicta?
      </div>
      <table className="table-auto">
        <tbody className="text-sm">
          <tr>
            <td className="html-cell-label">Implicit ARIA role</td>
            <td>
              <AriaRole role="" />
            </td>
          </tr>
          <tr>
            <td className="html-cell-label">Permitted ARIA roles</td>
            <td>
              <AriaRole role="" /> <AriaRole role="" />
            </td>
          </tr>
          <tr>
            <td className="html-cell-label">DOM interface</td>
            <td>
              <DomInterface element="" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default Template;
