import ContentSectioning from "@components/html/ContentSectioning";
import DocumentMetadata from "@components/html/DocumentMetadata";
import EmbeddedContent from "@components/html/EmbeddedContent";
import ImageAndMultimedia from "@components/html/ImageAndMultimedia";
import InlineTextSemantics from "@components/html/InlineTextSemantics";
import MainRoot from "@components/html/MainRoot";
import PageTitle from "@components/html/PageTitle";
import SectioningRoot from "@components/html/SectioningRoot";
import TextContent from "@components/html/TextContent";
import { NextPage } from "next";

const Html: NextPage = () => (
  <div>
    <main>
      <PageTitle heading="HTML" subheading="Elements" />
      <MainRoot />
      <DocumentMetadata />
      <SectioningRoot />
      <ContentSectioning />
      <TextContent />
      <InlineTextSemantics />
      <ImageAndMultimedia />
      <EmbeddedContent />
    </main>
  </div>
);

export default Html;
