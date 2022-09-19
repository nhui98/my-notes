import PageTitle from "@components/html/PageTitle";
import {
  ContentSectioning,
  DocumentMetadata,
  InlineTextSemantics,
  MainRoot,
  SectioningRoot,
  TextContent,
} from "@components/html/sections";
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
    </main>
  </div>
);

export default Html;
