import PageTitle from "@components/common/PageTitle/PageTitle";

import BodyTag from "./BodyTag";

const SectioningRoot = () => (
  <section className="html-section">
    <PageTitle
      heading="HTML"
      subheading="Elements"
      description="Sectioning Root"
    />
    <div className="html-section-layout">
      <BodyTag />
    </div>
  </section>
);

export default SectioningRoot;
