import TableRow from "../TableRow";
import Tag from "../Tag";

const SvgTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="svg" />
    </div>
    <div className="html-tag-content">
      <div>
        Container that defines a new coordinate system and viewport. It is used
        as the outermost element of SVG documents, but it can also be used to
        embed an SVG fragment inside an SVG or HTML document.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="Attributes">
            height preserveAspectRatio viewBox width x y
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default SvgTag;
