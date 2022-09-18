import SectionTitle from "../SectionTitle";
import {
  BaseTag,
  HeadTag,
  LinkTag,
  MetaTag,
  StyleTag,
  TitleTag,
} from "../tags";

const DocumentMetadata = () => (
  <section className="html-section">
    <SectionTitle title="Document Metadata" />
    <div className="flex flex-col gap-y-8">
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
