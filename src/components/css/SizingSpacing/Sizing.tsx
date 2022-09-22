import SectionTitle from "@components/common/SectionTitle/SectionTitle";

import Property from "../Property";

const Sizing = () => (
  <div>
    <SectionTitle title="Sizing" />

    <div>
      <div>
        <Property property="width" />
      </div>
      <div>
        <Property property="min-width" />
      </div>
      <div>
        <Property property="max-width" />
      </div>
      <div>
        <Property property="height" />
      </div>
      <div>
        <Property property="min-height" />
      </div>
      <div>
        <Property property="max-height" />
      </div>
    </div>
  </div>
);

export default Sizing;
