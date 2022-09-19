import { NextPage } from "next";
import Link from "next/link";

const DomInterface: NextPage<DomInterfaceProps> = ({ element }) => {
  return DOM_INTERFACE_LINKS[element] ? (
    <Link href={DOM_INTERFACE_LINKS[element]}>
      <a target="_blank" className="text-sky-400">
        {element}
      </a>
    </Link>
  ) : (
    <span>{element}</span>
  );
};
export default DomInterface;

interface DomInterfaceProps {
  element: string;
}

const DOM_INTERFACE_LINKS = {
  HTMLTextAreaElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement",
  HTMLSelectElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement",
  HTMLProgressElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement",
  HTMLOutputElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLOutputElement",
  HTMLOptionElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionElement",
  HTMLOptGroupElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptGroupElement",
  HTMLMeterElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMeterElement",
  HTMLHtmlElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLHtmlElement",
  HTMLHeadElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadElement",
  HTMLBaseElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLBaseElement",
  HTMLLinkElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement",
  HTMLMetaElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMetaElement",
  HTMLStyleElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement",
  HTMLTitleElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLTitleElement",
  HTMLBodyElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLBodyElement",
  HTMLElement:
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
  HTMLHeadingElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement",
  HTMLQuoteElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLQuoteElement",
  HTMLDivElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement",
  HTMLDListElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDListElement",
  HTMLSpanElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLSpanElement",
  HTMLHRElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLHRElement",
  HTMLLIElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLLIElement",
  HTMLOListElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLOListElement",
  HTMLUListElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLUListElement",
  HTMLParagraphElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLParagraphElement",
  HTMLPreElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLPreElement",
  HTMLAnchorElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement",
  HTMLBRElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLBRElement",
  HTMLDataElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataElement",
  HTMLTimeElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLTimeElement",
  HTMLAreaElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLAreaElement",
  HTMLAudioElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement",
  HTMLImageElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement",
  HTMLMapElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMapElement",
  HTMLTrackElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLTrackElement",
  HTMLVideoElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement",
  HTMLEmbedElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLEmbedElement",
  HTMLObjectElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement",
  HTMLPictureElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLPictureElement",
  HTMLSourceElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLSourceElement",
  HTMLIFrameElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement",
  HTMLCanvasElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement",
  HTMLScriptElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement",
  HTMLModElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLModElement",
  HTMLTableCaptionElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCaptionElement",
  HTMLTableColElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableColElement",
  HTMLTableElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement",
  HTMLTableSectionElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableSectionElement",
  HTMLTableCellElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCellElement",
  HTMLTableRowElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement",
  HTMLButtonElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement",
  HTMLDataListElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataListElement",
  HTMLFieldSetElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLFieldSetElement",
  HTMLFormElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement",
  HTMLInputElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement",
  HTMLLabelElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement",
  HTMLLegendElement:
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLLegendElement",
} as {
  [key: string]: string;
};
