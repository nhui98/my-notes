import ContentSectioning from "@components/html/ContentSectioning";
import DemarcatingEdits from "@components/html/DemarcatingEdits";
import DocumentMetadata from "@components/html/DocumentMetadata";
import EmbeddedContent from "@components/html/EmbeddedContent";
import Forms from "@components/html/Forms";
import ImageAndMultimedia from "@components/html/ImageAndMultimedia";
import InlineTextSemantics from "@components/html/InlineTextSemantics";
import InteractiveElements from "@components/html/InteractiveElements";
import MainRoot from "@components/html/MainRoot";
import PageTitle from "@components/html/PageTitle";
import Scripting from "@components/html/Scripting";
import SectioningRoot from "@components/html/SectioningRoot";
import SVGandMathML from "@components/html/SVGandMathML";
import TableContents from "@components/html/TableContent";
import TextContent from "@components/html/TextContent";
import WebComponent from "@components/html/WebComponents";
import { NextPage } from "next";

const Html: NextPage = () => (
  <div>
    <main className="py-10">
      <PageTitle heading="HTML" subheading="Elements" />
      <MainRoot />
      <DocumentMetadata />
      <SectioningRoot />
      <ContentSectioning />
      <TextContent />
      <InlineTextSemantics />
      <ImageAndMultimedia />
      <EmbeddedContent />
      <SVGandMathML />
      <Scripting />
      <DemarcatingEdits />
      <TableContents />
      <Forms />
      <InteractiveElements />
      <WebComponent />
    </main>
  </div>
);

export default Html;
