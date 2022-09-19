import SectionTitle from "../SectionTitle";
import AreaTag from "./AreaTag";
import AudioTag from "./AudioTag";
import ImgTag from "./ImgTag";
import MapTag from "./MapTag";
import TrackTag from "./TrackTag";
import VideoTag from "./VideoTag";

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
