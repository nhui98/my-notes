import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const ImgTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="img" />
    </div>

    <div className="html-tag-content">
      <div>Embeds an image into the document.</div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLImageElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="img" />
          </TableRow>
          <TableRow label="Permitted ARIA Role">
            <AriaRole role="button" /> <AriaRole role="checkbox" />{" "}
            <AriaRole role="link" /> <AriaRole role="menuitem" />{" "}
            <AriaRole role="menuitemcheckbox" />{" "}
            <AriaRole role="menuitemradio" /> <AriaRole role="option" />{" "}
            <AriaRole role="progressbar" /> <AriaRole role="scrollbar" />{" "}
            <AriaRole role="seperator" /> <AriaRole role="slider" />{" "}
            <AriaRole role="switch" /> <AriaRole role="tab" />{" "}
            <AriaRole role="treeitem" />
          </TableRow>
          <TableRow label="Attributes">
            alt crossorigin decoding fetchpriority height ismap loading
            referrerpolicy sizes src srcset width usemap
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default ImgTag;
