import SectionTitle from "../SectionTitle";
import DetailsTag from "./DetailsTag";
import DialogTag from "./DialogTag";
import SummaryTag from "./SummaryTag";

const InteractiveElements = () => (
  <section className="html-section">
    <SectionTitle title="Interactive Elements" />
    <div className="html-section-layout">
      <DetailsTag />
      <DialogTag />
      <SummaryTag />
    </div>
  </section>
);

export default InteractiveElements;
