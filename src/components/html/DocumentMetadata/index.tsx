import SectionTitle from "../SectionTitle";
import BaseTag from "./BaseTag";
import HeadTag from "./HeadTag";
import LinkTag from "./LinkTag";
import MetaTag from "./MetaTag";
import StyleTag from "./StyleTag";
import TitleTag from "./TitleTag";

const DocumentMetadata = () => (
  <section className="html-section">
    <SectionTitle title="Document Metadata" />
    <div className="html-section-layout">
      <HeadTag />
      <BaseTag />
      <LinkTag />
      <MetaTag />
      <StyleTag />
      <TitleTag />
    </div>
  </section>
);

export default DocumentMetadata;
