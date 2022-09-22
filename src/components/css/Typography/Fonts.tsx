import SectionTitle from "@components/common/SectionTitle/SectionTitle";

import Property from "../Property";

const Fonts = () => (
  <div>
    <SectionTitle title="Fonts" />

    <div>
      <h2>custom fonts</h2>
      <p>
        <Property property="@font-face" />
      </p>

      <h2>font properties</h2>
      <ul>
        <li>
          <Property property="font-family" />
          <Property property="font-size" />
          <Property property="font-weight" />
          <Property property="font-style" />
        </li>
      </ul>

      <ul>
        <li>
          <Property property="line-height" />
          <Property property="letter-spacing" />
          <Property property="word-spacing" />
          <Property property="white-space" />
          <Property property="text-decoration" />
        </li>
      </ul>
    </div>
  </div>
);

export default Fonts;
