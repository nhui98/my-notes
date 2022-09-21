import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const TitleTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="title" />
    </div>
    <div className="html-tag-content">
      <div>
        Defines document&apos;s title shown in browser&apos;s title bar or a
        page&apos;s tab. Only contains text, ignores tags.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLTitleElement" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default TitleTag;
