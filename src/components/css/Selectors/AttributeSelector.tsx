import SectionTitle from "@components/common/SectionTitle/SectionTitle";

import Property from "../Property";

const AttributeSelector = () => (
  <div>
    <SectionTitle title="Attribute Selector" />

    <div>
      <p>
        <Property property="[attr]" />
      </p>
      <p>
        <Property property="[attr=value]" />
      </p>
      <p>
        <Property property="[attr~=value]" />
        <span>contains value</span>
      </p>
      <p>
        <Property property="[attr*=value]" />
        <span>contains substring value</span>
      </p>
      <p>
        <Property property="[attr|=value]" />
        <span>equal to value or starts with value</span>
      </p>
      <p>
        <Property property="[attr^=value]" />
        <span>starts with</span>
      </p>
      <p>
        <Property property="[attr$=value]" />
        <span>ends with value</span>
      </p>
    </div>
  </div>
);

export default AttributeSelector;
