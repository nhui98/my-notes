import PageTitle from "../PageTitle";
import DelTag from "./DelTag";
import InsTag from "./InsTag";

const DemarcatingEdits = () => (
  <section className="html-section">
    <PageTitle
      heading="HTML"
      subheading="Elements"
      description="Demarcating Edits"
    />

    <div className="html-section-layout">
      <DelTag />
      <InsTag />
    </div>
  </section>
);

export default DemarcatingEdits;
