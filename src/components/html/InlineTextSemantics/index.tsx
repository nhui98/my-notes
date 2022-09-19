import SectionTitle from "../SectionTitle";
import AbbrTag from "./AbbrTag";
import ATag from "./ATag";
import BdiTag from "./BdiTag";
import BdoTag from "./BdoTag";
import BrTag from "./BrTag";
import BTag from "./BTag";
import CiteTag from "./CiteTag";
import CodeTag from "./CodeTag";
import DataTag from "./DataTag";
import DfnTag from "./DfnTag";
import EmTag from "./EmTag";
import ITag from "./ITag";
import KbdTag from "./KbdTag";
import MarkTag from "./MarkTag";
import QTag from "./QTag";
import SampTag from "./SampTag";
import SmallTag from "./SmallTag";
import SpanTag from "./SpanTag";
import STag from "./STag";
import StrongTag from "./StrongTag";
import SubTag from "./SubTag";
import SupTag from "./SupTag";
import TimeTag from "./TimeTag";
import UTag from "./UTag";
import VarTag from "./VarTag";

const InlineTextSemantics = () => (
  <section className="html-section">
    <SectionTitle title="Inline Text Semantics" />
    <div className="html-section-layout">
      <ATag />
      <AbbrTag />
      <BTag />
      <BdiTag />
      <BdoTag />
      <BrTag />
      <CiteTag />
      <CodeTag />
      <DataTag />
      <DfnTag />
      <EmTag />
      <ITag />
      <KbdTag />
      <MarkTag />
      <QTag />
      <STag />
      <SampTag />
      <SmallTag />
      <SpanTag />
      <StrongTag />
      <SubTag />
      <SupTag />
      <TimeTag />
      <UTag />
      <VarTag />
    </div>
  </section>
);

export default InlineTextSemantics;
