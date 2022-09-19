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
} as {
  [key: string]: string;
};
