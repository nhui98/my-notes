import Flyout from "@components/common/Flyout/Flyout";
import Sidebar from "@components/common/Sidebar/Sidebar";
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
import { SIDEBAR_LINKS } from "@constants/data-html";
import { NextPage } from "next";
import Head from "next/head";

const Html: NextPage = () => (
  <div>
    <Head>
      <title>HTML | Elements</title>
    </Head>

    <Flyout links={SIDEBAR_LINKS} />
    <Sidebar links={SIDEBAR_LINKS} />
    <main className="py-8 lg:pl-60">
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