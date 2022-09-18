import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
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
      <table className="table-auto">
        <tbody className="text-sm">
          <tr>
            <td className="html-cell-label">Implicit ARIA role</td>
            <td>
              <AriaRole role="region" /> if the element has an{" "}
              <AriaRole role="accessible name" />
            </td>
          </tr>
          <tr>
            <td className="html-cell-label">Permitted ARIA roles</td>
            <td>
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

export default SectionTag;
