import PageTitle from "../PageTitle";
import SlotTag from "./SlotTag";
import TemplateTag from "./TemplateTag";

const WebComponent = () => (
  <section className="html-section">
    <PageTitle
      heading="HTML"
      subheading="Elements"
      description="Web Component"
    />
    <div className="html-section-layout">
      <SlotTag />
      <TemplateTag />
    </div>
  </section>
);

export default WebComponent;
