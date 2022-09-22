import SectionTitle from "@components/common/SectionTitle/SectionTitle";

const Cascade = () => (
  <div>
    <SectionTitle title="Cascade" />

    <div>
      <p>
        Cascade is the process, or algorithm, that determines the properties
        applied to each element on the page. Trying to converge from a list of
        CSS rules that are defined in various places.
      </p>
      <span>It does so taking in consideration:</span>
      <ul>
        <li className="list-inside list-disc">specificity </li>
        <li className="list-inside list-disc">importance</li>
        <li className="list-inside list-disc">inheritance</li>
        <li className="list-inside list-disc">order in the file</li>
      </ul>
    </div>
  </div>
);

export default Cascade;
