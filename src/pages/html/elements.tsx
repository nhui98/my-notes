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
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Html: NextPage = () => {
  const [selectedLink, setSelectedLink] = useState("");
  const [queryParam, setQueryParam] = useState("");
  const router = useRouter();

  useEffect(() => {
    const container = router.query.c;
    if (!container || Array.isArray(container)) return;
    setQueryParam(container);

    const paths = router.route.split("/");
    paths.push(container);
    paths.shift();
    setSelectedLink(paths.join("-"));
  }, [router.route, router.query.c]);

  return (
    <div>
      <Head>
        <title>HTML | Elements</title>
      </Head>

      <Flyout links={SIDEBAR_LINKS} selectedLink={selectedLink} />
      <Sidebar links={SIDEBAR_LINKS} selectedLink={selectedLink} />
      <main className="py-8 lg:pl-60">
        <PageTitle heading="HTML" subheading="Elements" />
        {paths[queryParam]}
      </main>
    </div>
  );
};
export default Html;

const paths = {
  mainroot: <MainRoot />,
  documentmetadata: <DocumentMetadata />,
  sectionroot: <SectioningRoot />,
  contentsectioning: <ContentSectioning />,
  textcontent: <TextContent />,
  inlinetextsemantics: <InlineTextSemantics />,
  imageandmultimedia: <ImageAndMultimedia />,
  embeddedcontent: <EmbeddedContent />,
  svgandmmathml: <SVGandMathML />,
  scripting: <Scripting />,
  demarcatingedits: <DemarcatingEdits />,
  tablecontents: <TableContents />,
  forms: <Forms />,
  interactiveelements: <InteractiveElements />,
  webcomponents: <WebComponent />,
} as {
  [key: string]: JSX.Element;
};
