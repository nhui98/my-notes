import SectionTitle from "@components/common/SectionTitle/SectionTitle";

import Property from "../Property";

const UnitsSizing = () => (
  <div>
    <SectionTitle title="Units" />

    <div>
      <p>
        <Property property="px" />
        <ul>
          <li>relative to viewport if positioned fixed</li>
          <li>
            relative to closest positioned ancestor if positioned absolute
          </li>
          <li>relative to closest block ancestor if relative/static</li>
        </ul>
      </p>
      <p>
        <Property property="%" />
      </p>
      <p>
        <Property property="em" />
        <ul>
          <li>on font-size is relative to parent font size</li>
          <li>on other property is relative to own font size</li>
        </ul>
      </p>
      <p>
        <Property property="rem" />
        <ul>
          <li>relative to root/html font size</li>
        </ul>
      </p>
    </div>
  </div>
);

export default UnitsSizing;
