import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const PictureTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="picture" />
    </div>

    <div className="html-tag-content">
      <div>
        Contains zero or more <Tag tag="source" /> elements and one{" "}
        <Tag tag="img" /> element to offer alternative versions of an image for
        different display/device scenarios.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLPictureElement" />
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default PictureTag;
