import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import Tag from "../Tag";

const AudioTag = () => (
  <div className="html-tag-container">
    <div className="html-tag">
      <Tag tag="audio" />
    </div>

    <div className="html-tag-content">
      <div>
        Used to embed sound content in documents. It may contain one or more
        audio sources, represented using the src attribute or the{" "}
        <Tag tag="source" /> element: the browser will choose the most suitable
        one.
      </div>
      <table className="html-tag-table">
        <tbody className="html-tag-tbody">
          <tr className="html-tag-trow">
            <td className="html-cell-label">DOM Interface</td>
            <td className="html-cell-details">
              <DomInterface element="HTMLAudioElement" />
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
              autoplay controls controlslist crossorigin disableremoteplayback
              loop muted preload src
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default AudioTag;
