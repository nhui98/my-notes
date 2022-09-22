import SectionTitle from "@components/common/SectionTitle/SectionTitle";

import Property from "../Property";

const PseudoElement = () => (
  <div>
    <SectionTitle title="Pseudo Elements" />

    <div>
      <p>
        <Property property="::before" />
        <Property property="::after" />
      </p>
      <p>
        Select range of content
        <span>
          <Property property=":nth-of-child(n+3):nth-of-child(-n+5)" />
          gets the 3rd to 5th items
        </span>
      </p>
    </div>
  </div>
);

export default PseudoElement;
