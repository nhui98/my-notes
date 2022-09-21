import PageTitle from "../PageTitle";
import MathTag from "./MathTag";
import SvgTag from "./SvgTag";

const SVGandMathML = () => (
  <section className="html-section">
    <PageTitle
      heading="HTML"
      subheading="Elements"
      description="SVG and MathML"
    />
    <div className="html-section-layout">
      <SvgTag />
      <MathTag />
    </div>
  </section>
);

export default SVGandMathML;
