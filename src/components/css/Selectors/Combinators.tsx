import SectionTitle from "@components/common/SectionTitle/SectionTitle";

import Property from "../Property";

const Combinators = () => (
  <div>
    <SectionTitle title="Combinators" />

    <div>
      <p>
        <Property property="(space)" />
        <span>descendant</span>
      </p>
      <p>
        <Property property=">" />
        <span>child</span>
      </p>
      <p>
        <Property property="+" />
        <span>adjacent sibling</span>
      </p>
      <p>
        <Property property="~" />
        <span>general sibling</span>
      </p>
    </div>
  </div>
);

export default Combinators;
