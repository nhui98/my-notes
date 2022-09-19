import SectionTitle from "../SectionTitle";
import CanvasTag from "./CanvasTag";
import NoScriptTag from "./NoScriptTag";
import ScriptTag from "./ScriptTag";

const Scripting = () => (
  <section className="html-section">
    <SectionTitle title="Scripting" />
    <div className="html-section-layout">
      <CanvasTag />
      <NoScriptTag />
      <ScriptTag />
    </div>
  </section>
);

export default Scripting;
