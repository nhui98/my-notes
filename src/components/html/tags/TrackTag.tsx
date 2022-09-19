import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const TrackTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="track" />
    </div>

    <div className="html-tag-content">
      <div>
        Used as a child of the media elements, <Tag tag="audio" /> and{" "}
        <Tag tag="video" />. It lets you specify timed text tracks (or
        time-based data), for example to automatically handle subtitles.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLTrackElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">
              default kind label src srclang
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default TrackTag;
