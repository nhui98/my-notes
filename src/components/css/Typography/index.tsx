import PageTitle from "@components/common/PageTitle/PageTitle";

import Fonts from "./Fonts";
import MediaQueries from "./MediaQueries";
import Units from "./Units";

const Typography = () => (
  <section>
    <PageTitle heading="CSS" subheading="Typography" />

    <div className="section-layout">
      <Units />
      <Fonts />
      <MediaQueries />
    </div>
  </section>
);

export default Typography;
