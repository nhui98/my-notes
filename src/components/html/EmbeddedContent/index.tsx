import SectionTitle from "../SectionTitle";
import EmbedTag from "./EmbedTag";
import IFrameTag from "./IFrameTag";
import ObjectTag from "./ObjectTag";
import PictureTag from "./PictureTag";
import PortalTag from "./PortalTag";
import SourceTag from "./SourceTag";

const EmbeddedContent = () => (
  <section className="html-section">
    <SectionTitle title="Embedded Content" />
    <div className="html-section-layout">
      <EmbedTag />
      <IFrameTag />
      <ObjectTag />
      <PictureTag />
      <PortalTag />
      <SourceTag />
    </div>
  </section>
);

export default EmbeddedContent;
