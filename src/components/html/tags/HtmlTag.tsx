import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const HtmlTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="html" />
    </div>
    <div className="flex w-full flex-col gap-y-1">
      <div>Root element of a HTML document.</div>
      <table className="table-auto">
        <tbody className="text-sm">
          <tr>
            <td className="html-cell-label">Implicit ARIA role</td>
            <td>
              <AriaRole role="document" />
            </td>
          </tr>
          <tr>
            <td className="html-cell-label">DOM interface</td>
            <td>
              <DomInterface element="HTMLHtmlElement" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default HtmlTag;
