import SectionTitle from "../SectionTitle";
import SlotTag from "./SlotTag";
import TemplateTag from "./TemplateTag";

const WebComponent = () => (
  <section className="html-section">
    <SectionTitle title="Web Component" />
    <div className="html-section-layout">
      <SlotTag />
      <TemplateTag />
    </div>
  </section>
);

export default WebComponent;
