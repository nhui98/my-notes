import AriaRole from "../AriaRole";
import DomInterface from "../DomInterface";
import TableRow from "../TableRow";
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
          <TableRow label="DOM Interface">
            <DomInterface element="HTMLAudioElement" />
          </TableRow>
          <TableRow label="Permitted ARIA Role">
            <AriaRole role="application" />
          </TableRow>
          <TableRow label="Attributes">
            autoplay controls controlslist crossorigin disableremoteplayback
            loop muted preload src
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
);

export default AudioTag;
