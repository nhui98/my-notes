import SectionTitle from "../SectionTitle";
import { AreaTag, AudioTag, ImgTag, MapTag, TrackTag, VideoTag } from "../tags";

const ImageAndMultimedia = () => (
  <section className="html-section">
    <SectionTitle title="Image and Multimedia" />
    <div className="html-section-layout">
      <AreaTag />
      <AudioTag />
      <ImgTag />
      <MapTag />
      <TrackTag />
      <VideoTag />
    </div>
  </section>
);

export default ImageAndMultimedia;
