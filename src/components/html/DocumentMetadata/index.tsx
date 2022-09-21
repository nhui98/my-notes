import PageTitle from "@components/common/PageTitle/PageTitle";

import BaseTag from "./BaseTag";
import HeadTag from "./HeadTag";
import LinkTag from "./LinkTag";
import MetaTag from "./MetaTag";
import StyleTag from "./StyleTag";
import TitleTag from "./TitleTag";

const DocumentMetadata = () => (
  <section className="section">
    <PageTitle
      heading="HTML"
      subheading="Elements"
      description="Document Metadata"
    />
    <div className="section-layout">
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
