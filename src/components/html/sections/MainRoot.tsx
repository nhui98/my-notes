import SectionTitle from "../SectionTitle";
import { HtmlTag } from "../tags";

const MainRoot = () => (
  <section className="html-section">
    <SectionTitle title="Main Root" />
    <div className="flex flex-col gap-y-8">
      <HtmlTag />
    </div>
  </section>
);

export default MainRoot;
