import SectionTitle from "../SectionTitle";
import BodyTag from "../tags/BodyTag";

const SectioningRoot = () => (
  <section className="html-section">
    <SectionTitle title="Sectioning Root" />
    <div className="flex flex-col gap-y-8">
      <BodyTag />
    </div>
  </section>
);

export default SectioningRoot;
