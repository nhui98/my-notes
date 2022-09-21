import PageTitle from "@components/common/PageTitle/PageTitle";

import EmbedTag from "./EmbedTag";
import IFrameTag from "./IFrameTag";
import ObjectTag from "./ObjectTag";
import PictureTag from "./PictureTag";
import PortalTag from "./PortalTag";
import SourceTag from "./SourceTag";

const EmbeddedContent = () => (
  <section className="section">
    <PageTitle
      heading="HTML"
      subheading="Elements"
      description="Embedded Content"
    />
    <div className="section-layout">
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
