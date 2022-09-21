import PageTitle from "../../common/PageTitle/PageTitle";
import HtmlTag from "./HtmlTag";

const MainRoot = () => (
  <section className="section">
    <PageTitle heading="HTML" subheading="Elements" description="Main Root" />

    <div className="section-layout">
      <HtmlTag />
    </div>
  </section>
);

export default MainRoot;
