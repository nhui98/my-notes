import SectionTitle from "../SectionTitle";
import BodyTag from "./BodyTag";

const SectioningRoot = () => (
  <section className="html-section">
    <SectionTitle title="Sectioning Root" />
    <div className="html-section-layout">
      <BodyTag />
    </div>
  </section>
);

export default SectioningRoot;
