import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
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
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLMapElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">name</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default MapTag;
