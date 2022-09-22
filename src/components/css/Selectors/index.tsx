import PageTitle from "@components/common/PageTitle/PageTitle";

import AttributeSelector from "./AttributeSelector";
import BasicSelectors from "./BasicSelectors";
import Combinators from "./Combinators";
import PseudoClass from "./PseudoClass";
import PseudoElement from "./PseudoElement";

const Selectors = () => (
  <section>
    <PageTitle heading="CSS" subheading="Selectors" />

    <div className="section-layout">
      <BasicSelectors />
      <AttributeSelector />
      <Combinators />
      <PseudoClass />
      <PseudoElement />
    </div>
  </section>
);

export default Selectors;
