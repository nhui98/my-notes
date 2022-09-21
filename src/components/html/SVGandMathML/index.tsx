import PageTitle from "@components/common/PageTitle/PageTitle";

import MathTag from "./MathTag";
import SvgTag from "./SvgTag";

const SVGandMathML = () => (
  <section className="section">
    <PageTitle
      heading="HTML"
      subheading="Elements"
      description="SVG and MathML"
    />
    <div className="section-layout">
      <SvgTag />
      <MathTag />
    </div>
  </section>
);

export default SVGandMathML;
