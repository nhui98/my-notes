import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const KbdTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="kbd" />
    </div>

    <div className="html-tag-content">
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
        nihil quisquam hic aliquid unde sapiente exercitationem animi suscipit
        quasi dicta?
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLElement" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default KbdTag;
