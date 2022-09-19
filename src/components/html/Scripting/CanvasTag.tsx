import DomInterface from "../DomInterface";
import Tag from "../Tag";

const CanvasTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="canvas" />
    </div>
    <div className="html-tag-content">
      <div>
        Use with either the canvas scripting API or the WebGL API to draw
        graphics and animations.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLCanvasElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">height width</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default CanvasTag;
