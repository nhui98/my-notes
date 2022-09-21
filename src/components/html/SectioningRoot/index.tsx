import PageTitle from "@components/common/PageTitle/PageTitle";

import BodyTag from "./BodyTag";

const SectioningRoot = () => (
  <section className="section">
    <PageTitle
      heading="HTML"
      subheading="Elements"
      description="Sectioning Root"
    />
    <div className="section-layout">
      <BodyTag />
    </div>
  </section>
);

export default SectioningRoot;
