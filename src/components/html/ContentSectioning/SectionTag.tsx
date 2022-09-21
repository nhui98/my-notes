import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const SectionTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="section" />
    </div>
    <div className="html-tag-content">
      <div>
        Represents generic standalone section of a document which doesnt have a
        more specific semantic element to represent it. Should always have a
        heading.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLElement" />
          </TableRow>
          <TableRow label="Implicit ARIA Role">
            <AriaRole role="region" /> if the element has an{" "}
            <AriaRole role="accessible name" />
          </TableRow>
          <TableRow label="Permitted ARIA Role">
            <AriaRole role="alert" /> <AriaRole role="alertdialog" />{" "}
            <AriaRole role="application" /> <AriaRole role="banner" />{" "}
            <AriaRole role="complementary" /> <AriaRole role="contentinfo" />{" "}
            <AriaRole role="dialog" /> <AriaRole role="document" />{" "}
            <AriaRole role="feed" /> <AriaRole role="log" />{" "}
            <AriaRole role="main" /> <AriaRole role="marquee" />{" "}
            <AriaRole role="navigation" /> <AriaRole role="none" />{" "}
            <AriaRole role="note" /> <AriaRole role="presentation" />{" "}
            <AriaRole role="search" /> <AriaRole role="status" />{" "}
            <AriaRole role="tabpanel" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default SectionTag;
