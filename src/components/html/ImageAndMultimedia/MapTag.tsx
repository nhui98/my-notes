import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const MapTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="map" />
    </div>

    <div className="html-tag-content">
      <div>
        Used with <Tag tag="area" /> elements to define an image map (a
        clickable link area).
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLMapElement" />
          </TableRow>
          <TableRow label="Attributes">name</TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default MapTag;
