import SectionTitle from "../SectionTitle";
import ButtonTag from "./ButtonTag";
import DatalistTag from "./DatalistTag";
import FieldsetTag from "./FieldsetTag";
import FormTag from "./FormTag";
import InputTag from "./InputTag";
import LabelTag from "./LabelTag";
import LegendTag from "./LegendTag";
import MeterTag from "./MeterTag";
import OptgroupTag from "./OptgroupTag";
import OptionTag from "./OptionTag";
import OutputTag from "./OutputTag";
import ProgressTag from "./ProgressTag";
import SelectTag from "./SelectTag";
import TextareaTag from "./TextareaTag";

const Forms = () => (
  <section className="html-section">
    <SectionTitle title="Forms" />
    <div className="html-section-layout">
      <ButtonTag />
      <DatalistTag />
      <FieldsetTag />
      <FormTag />
      <InputTag />
      <LabelTag />
      <LegendTag />
      <MeterTag />
      <OptgroupTag />
      <OptionTag />
      <OutputTag />
      <ProgressTag />
      <SelectTag />
      <TextareaTag />
    </div>
  </section>
);

export default Forms;
