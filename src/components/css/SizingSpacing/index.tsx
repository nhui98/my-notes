import PageTitle from "@components/common/PageTitle/PageTitle";

import Sizing from "./Sizing";
import Spacing from "./Spacing";

const SizingSpacing = () => (
  <section>
    <PageTitle heading="CSS" subheading="Sizing & Spacing" />

    <div className="section-layout">
      <Sizing />
      <Spacing />
    </div>
  </section>
);

export default SizingSpacing;
