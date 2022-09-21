import PageTitle from "@components/common/PageTitle/PageTitle";

import DelTag from "./DelTag";
import InsTag from "./InsTag";

const DemarcatingEdits = () => (
  <section className="section">
    <PageTitle
      heading="HTML"
      subheading="Elements"
      description="Demarcating Edits"
    />

    <div className="section-layout">
      <DelTag />
      <InsTag />
    </div>
  </section>
);

export default DemarcatingEdits;
