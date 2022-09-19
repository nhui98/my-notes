import DomInterface from "../DomInterface";
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
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLSlotElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">name</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default SlotTag;
