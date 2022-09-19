import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const TbodyTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="tbody" />
    </div>
    <div className="html-tag-content">
      <div>
        Encapsulates a set of table rows (<Tag tag="tr" /> elements), indicating
        that they comprise the body of the table (<Tag tag="table" />
        ).
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLTableSectionElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Implicit ARIA Role</td>
            <td className="html-cell-details">
              <AriaRole role="rowgroup" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default TbodyTag;
