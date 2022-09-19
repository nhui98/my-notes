import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
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
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLVideoElement" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Permitted ARIA roles</td>
            <td className="html-cell-details">
              <AriaRole role="application" />
            </td>
          </tr>
          <tr className="html-tag-trow">
            <td className="html-cell-label">Attributes</td>
            <td className="html-cell-details">
              autoplay autopictureinpicture controls constrolslist crossorigin
              disablepictureinpicture disableremoteplayback height loop muted
              poster preload src width
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default VideoTag;
