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
} as {
  [key: string]: string;
};
