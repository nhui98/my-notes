import PageTitle from "../PageTitle";
import CanvasTag from "./CanvasTag";
import NoScriptTag from "./NoScriptTag";
import ScriptTag from "./ScriptTag";

const Scripting = () => (
  <section className="html-section">
    <PageTitle heading="HTML" subheading="Elements" description="Scripting" />
    <div className="html-section-layout">
      <CanvasTag />
      <NoScriptTag />
      <ScriptTag />
    </div>
  </section>
);

export default Scripting;
