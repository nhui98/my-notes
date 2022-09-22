import SectionTitle from "@components/common/SectionTitle/SectionTitle";

const Specificity = () => (
  <div>
    <SectionTitle title="Specificity" />

    <div>
      <p>
        Determines which style is applied if multiple rules are targetting the
        same element. More specific rule will win, if same specificity, then one
        that appears last wins. <br />
      </p>
      <span>Specificity order (most to least important):</span>
      <ul>
        <li className="list-inside list-decimal">important flag</li>
        <li className="list-inside list-decimal">inline style</li>
        <li className="list-inside list-decimal">id selector</li>
        <li className="list-inside list-decimal">class selector</li>
        <li className="list-inside list-decimal">element selector </li>
      </ul>
    </div>
  </div>
);

export default Specificity;
