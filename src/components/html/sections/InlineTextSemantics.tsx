import SectionTitle from "../SectionTitle";
import {
  AbbrTag,
  ATag,
  BdiTag,
  BdoTag,
  BrTag,
  BTag,
  CiteTag,
  CodeTag,
  DataTag,
  DfnTag,
  EmTag,
  ITag,
  KbdTag,
  MarkTag,
  QTag,
  SampTag,
  SmallTag,
  SpanTag,
  STag,
  StrongTag,
  SubTag,
  SupTag,
  TimeTag,
  UTag,
  VarTag,
} from "../tags";

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
