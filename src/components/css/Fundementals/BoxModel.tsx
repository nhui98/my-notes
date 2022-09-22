import SectionTitle from "@components/common/SectionTitle/SectionTitle";

const BoxModel = () => (
  <div>
    <SectionTitle title="Box Model" />

    <div>
      <p>
        Every CSS element is a generic box. The box model explains the sizing of
        the elements based on a few properties from the inside to the outside:
      </p>
      <ul>
        <li className="list-inside list-disc">
          the content area &gt; padding &gt; border &gt; margin
        </li>
      </ul>
    </div>
  </div>
);

export default BoxModel;
