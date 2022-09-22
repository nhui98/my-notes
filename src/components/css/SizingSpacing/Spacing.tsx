import SectionTitle from "@components/common/SectionTitle/SectionTitle";

import Property from "../Property";

const Spacing = () => (
  <div>
    <SectionTitle title="Spacing" />

    <div>
      <div>
        <Property property="padding" />
      </div>
      <div>
        <Property property="margin" />
      </div>
    </div>
  </div>
);

export default Spacing;
