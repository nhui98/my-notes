import PageTitle from "@components/common/PageTitle/PageTitle";

import CanvasTag from "./CanvasTag";
import NoScriptTag from "./NoScriptTag";
import ScriptTag from "./ScriptTag";

const Scripting = () => (
  <section className="section">
    <PageTitle heading="HTML" subheading="Elements" description="Scripting" />
    <div className="section-layout">
      <CanvasTag />
      <NoScriptTag />
      <ScriptTag />
    </div>
  </section>
);

export default Scripting;
