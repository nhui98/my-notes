import PageTitle from "@components/common/PageTitle/PageTitle";

import BlockquoteTag from "./BlockquoteTag";
import DDTag from "./DDTag";
import DivTag from "./DivTag";
import DLTag from "./DLTag";
import DTTag from "./DTTag";
import FigcaptionTag from "./FigcaptionTag";
import FigureTag from "./FigureTag";
import HRTag from "./HRTag";
import LITag from "./LITag";
import MenuTag from "./MenuTag";
import OLTag from "./OLTag";
import PreTag from "./PreTag";
import PTag from "./PTag";
import ULTag from "./ULTag";

const TextContent = () => (
  <section className="section">
    <PageTitle
      heading="HTML"
      subheading="Elements"
      description="Text Content"
    />
    <div className="section-layout">
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
