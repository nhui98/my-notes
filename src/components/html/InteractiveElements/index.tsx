import PageTitle from "../PageTitle";
import DetailsTag from "./DetailsTag";
import DialogTag from "./DialogTag";
import SummaryTag from "./SummaryTag";

const InteractiveElements = () => (
  <section className="html-section">
    <PageTitle
      heading="HTML"
      subheading="Elements"
      description="Interactive Elements"
    />

    <div className="html-section-layout">
      <DetailsTag />
      <DialogTag />
      <SummaryTag />
    </div>
  </section>
);

export default InteractiveElements;
