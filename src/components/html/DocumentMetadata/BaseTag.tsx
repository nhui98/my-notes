import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const BaseTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="base" />
    </div>
    <div className="html-tag-content">
      <div>
        Base URL to use for all relative URLs in a document. Only one{" "}
        {<Tag tag="base" />} allowed in a document. <br />
        If no {<Tag tag="base" />} then baseURI defaults to location.href
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLBaseElement" />
          </TableRow>
          <TableRow label="Attributes">href target</TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default BaseTag;
