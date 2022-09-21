import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const NoScriptTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="noscript" />
    </div>
    <div className="html-tag-content">
      <div>
        Defines a section of HTML to be inserted if a script type on the page is
        unsupported or if scripting is currently turned off in the browser.
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

export default NoScriptTag;
