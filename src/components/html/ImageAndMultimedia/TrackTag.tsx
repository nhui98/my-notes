import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
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
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLTrackElement" />
          </TableRow>
          <TableRow label="Attributes">default kind label src srclang</TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default TrackTag;
