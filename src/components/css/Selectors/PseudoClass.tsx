import SectionTitle from "@components/common/SectionTitle/SectionTitle";

import Property from "../Property";

const PseudoClass = () => (
  <div>
    <SectionTitle title="Pseudo Classes" />

    <div>
      <p>
        <Property property=":hover" />
        <Property property=":focus" />
        <Property property=":not(selector)" />
      </p>
      <p>
        <Property property=":first-child" />
        <Property property=":last-child" />
        <Property property=":nth-child(n)" />
        <Property property=":only-child" />
      </p>
      <p>
        <Property property=":first-of-type" />
        <Property property=":last-of-type" />
        <Property property=":nth-of-type(n)" />
        <Property property=":only-of-type" />
      </p>
      <p>
        <Property property=":empty" />
        <Property property=":target" />
      </p>
    </div>
  </div>
);

export default PseudoClass;
