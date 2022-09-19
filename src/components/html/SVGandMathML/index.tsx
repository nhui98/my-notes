import SectionTitle from "../SectionTitle";
import MathTag from "./MathTag";
import SvgTag from "./SvgTag";

const SVGandMathML = () => (
  <section className="html-section">
    <SectionTitle title="SVG and MathML" />
    <div className="html-section-layout">
      <SvgTag />
      <MathTag />
    </div>
  </section>
);

export default SVGandMathML;
