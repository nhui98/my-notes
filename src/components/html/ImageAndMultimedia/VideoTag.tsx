import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
import Tag from "../Tag";

const VideoTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="video" />
    </div>

    <div className="html-tag-content">
      <div>
        Embeds a media player which supports video playback into the document.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLVideoElement" />
          </TableRow>
          <TableRow label="Permitted ARIA Role">
            <AriaRole role="application" />
          </TableRow>
          <TableRow label="Attributes">
            autoplay autopictureinpicture controls constrolslist crossorigin
            disablepictureinpicture disableremoteplayback height loop muted
            poster preload src width
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default VideoTag;
