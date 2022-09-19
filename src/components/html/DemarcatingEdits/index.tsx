import SectionTitle from "../SectionTitle";
import DelTag from "./DelTag";
import InsTag from "./InsTag";

const DemarcatingEdits = () => (
  <section className="html-section">
    <SectionTitle title="Demarcating Edits" />
    <div className="html-section-layout">
      <DelTag />
      <InsTag />
    </div>
  </section>
);

export default DemarcatingEdits;
