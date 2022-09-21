import PageTitle from "@components/common/PageTitle/PageTitle";

import SlotTag from "./SlotTag";
import TemplateTag from "./TemplateTag";

const WebComponent = () => (
  <section className="section">
    <PageTitle
      heading="HTML"
      subheading="Elements"
      description="Web Component"
    />
    <div className="section-layout">
      <SlotTag />
      <TemplateTag />
    </div>
  </section>
);

export default WebComponent;
