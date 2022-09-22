import PageTitle from "@components/common/PageTitle/PageTitle";

import BoxModel from "./BoxModel";
import Cascade from "./Cascade";
import Inheritance from "./Inheritance";
import Specificity from "./Specificity";

const Fundementals = () => (
  <section>
    <PageTitle heading="CSS" subheading="Fundementals" />

    <div className="section-layout">
      <BoxModel />
      <Cascade />
      <Specificity />
      <Inheritance />
    </div>
  </section>
);

export default Fundementals;
