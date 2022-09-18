import SectionTitle from "../SectionTitle";
import {
  BlockquoteTag,
  DDTag,
  DivTag,
  DLTag,
  DTTag,
  FigcaptionTag,
  FigureTag,
  HRTag,
  LITag,
  MenuTag,
  OLTag,
  PreTag,
  PTag,
  ULTag,
} from "../tags";

const TextContent = () => (
  <section className="html-section">
    <SectionTitle title="Text Content" />
    <div className="html-section-layout">
      <BlockquoteTag />
      <DivTag />
      <DLTag />
      <DTTag />
      <DDTag />
      <FigureTag />
      <FigcaptionTag />
      <HRTag />
      <OLTag />
      <ULTag />
      <MenuTag />
      <LITag />
      <PTag />
      <PreTag />
    </div>
  </section>
);

export default TextContent;
