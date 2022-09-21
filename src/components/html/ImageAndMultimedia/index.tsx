import PageTitle from "@components/common/PageTitle/PageTitle";

import AreaTag from "./AreaTag";
import AudioTag from "./AudioTag";
import ImgTag from "./ImgTag";
import MapTag from "./MapTag";
import TrackTag from "./TrackTag";
import VideoTag from "./VideoTag";

const ImageAndMultimedia = () => (
  <section className="section">
    <PageTitle
      heading="HTML"
      subheading="Elements"
      description="Image and Multimedia"
    />
    <div className="section-layout">
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
