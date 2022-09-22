import SectionTitle from "@components/common/SectionTitle/SectionTitle";

import Property from "../Property";

const MediaQueries = () => (
  <div>
    <SectionTitle title="Media Queries" />

    <div>
      <p>
        <Property property="@media (min-width | max-width)" />
      </p>
    </div>
  </div>
);

export default MediaQueries;
