import { NextPage } from "next";
import Link from "next/link";

const AriaRole: NextPage<AriaRoleProps> = ({ role }) => {
  return ARIA_ROLE_LINKS[role] ? (
    <Link href={ARIA_ROLE_LINKS[role]}>
      <a target="_blank" className="text-sky-400">
        {role}
      </a>
    </Link>
  ) : (
    <span>{role}</span>
  );
};
export default AriaRole;

interface AriaRoleProps {
  role: string;
}

const ARIA_ROLE_LINKS = {
  alert: "https://w3c.github.io/aria/#alert",
  alertdialog: "https://w3c.github.io/aria/#alertdialog",
  article:
    "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/article_role",
  application: "https://w3c.github.io/aria/#application",
  banner: "https://w3c.github.io/aria/#banner",
  complementary:
    "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/complementary_role",
  contentinfo:
    "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role",
  dialog: "https://w3c.github.io/aria/#dialog",
  document:
    "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/document_role",
  feed: "https://w3c.github.io/aria/#feed",
  group: "https://w3c.github.io/aria/#group",
  generic:
    "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/generic_role",
  heading:
    "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role",
  link: "https://w3c.github.io/aria/#link",
  log: "https://w3c.github.io/aria/#log",
  main: "https://w3c.github.io/aria/#main",
  marquee: "https://w3c.github.io/aria/#marquee",
  none: "https://w3c.github.io/aria/#none",
  note: "https://w3c.github.io/aria/#note",
  navigation:
    "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/navigation_role",
  presentation: "https://w3c.github.io/aria/#presentation",
  region: "https://w3c.github.io/aria/#region",
  search: "https://w3c.github.io/aria/#search",
  status: "https://w3c.github.io/aria/#status",
  tab: "https://w3c.github.io/aria/#tab",
  tabpanel: "https://w3c.github.io/aria/#tabpanel",
} as {
  [key: string]: string;
};
