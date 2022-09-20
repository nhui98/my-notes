import ContentSectioning from "@components/html/ContentSectioning";
import DemarcatingEdits from "@components/html/DemarcatingEdits";
import DocumentMetadata from "@components/html/DocumentMetadata";
import EmbeddedContent from "@components/html/EmbeddedContent";
import Forms from "@components/html/Forms";
import ImageAndMultimedia from "@components/html/ImageAndMultimedia";
import InlineTextSemantics from "@components/html/InlineTextSemantics";
import InteractiveElements from "@components/html/InteractiveElements";
import MainRoot from "@components/html/MainRoot";
import Scripting from "@components/html/Scripting";
import SectioningRoot from "@components/html/SectioningRoot";
import SVGandMathML from "@components/html/SVGandMathML";
import TableContents from "@components/html/TableContent";
import TextContent from "@components/html/TextContent";
import WebComponent from "@components/html/WebComponents";

export const PATH_MAP = {
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
