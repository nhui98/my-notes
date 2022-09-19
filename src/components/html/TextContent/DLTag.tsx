import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const DLTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="dl" />
    </div>

    <div className="html-tag-content">
      <div>
        Represents a description list. The element encloses a list of groups of
        terms (specified using the <Tag tag="dt" /> element) and descriptions
        (provided by <Tag tag="dd" /> elements)
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLDListElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Permitted ARIA roles</td>
            <td className="html-cell-details">
              <AriaRole role="group" /> <AriaRole role="list" />{" "}
              <AriaRole role="none" /> <AriaRole role="presentation" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default DLTag;
