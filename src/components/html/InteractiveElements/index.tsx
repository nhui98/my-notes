import PageTitle from "@components/common/PageTitle/PageTitle";

import DetailsTag from "./DetailsTag";
import DialogTag from "./DialogTag";
import SummaryTag from "./SummaryTag";

const InteractiveElements = () => (
  <section className="section">
    <PageTitle
      heading="HTML"
      subheading="Elements"
      description="Interactive Elements"
    />

    <div className="section-layout">
      <DetailsTag />
      <DialogTag />
      <SummaryTag />
    </div>
  </section>
);

export default InteractiveElements;
