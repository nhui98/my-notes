import SectionTitle from "@components/common/SectionTitle/SectionTitle";

import Property from "../Property";

const Inheritance = () => (
  <div>
    <SectionTitle title="Inheritance" />

    <div>
      <p>
        Some properties set on a selector are inherited by all the children of
        that selector.
      </p>
      <span>Setting inherit manually:</span>
      <div className="flex flex-col">
        <Property property="inherit" />
        <Property property="initial" />
        <Property property="unset" />
      </div>
    </div>
  </div>
);

export default Inheritance;
