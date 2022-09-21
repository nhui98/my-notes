import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
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
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLCanvasElement" />
          </TableRow>
          <TableRow label="Attributes">height width</TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default CanvasTag;
