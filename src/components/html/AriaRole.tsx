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
  button: "https://w3c.github.io/aria/#button",
  checkbox: "https://w3c.github.io/aria/#checkbox",
  complementary:
    "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/complementary_role",
  contentinfo:
    "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role",
  dialog: "https://w3c.github.io/aria/#dialog",
  directory: "https://w3c.github.io/aria/#directory",
  definition: "https://w3c.github.io/aria/#definition",
  document:
    "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/document_role",
  feed: "https://w3c.github.io/aria/#feed",
  group: "https://w3c.github.io/aria/#group",
  generic:
    "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/generic_role",
  heading:
    "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role",
  link: "https://w3c.github.io/aria/#link",
  list: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/list_role",
  listbox:
    "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role",
  listitem:
    "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listitem_role",
  log: "https://w3c.github.io/aria/#log",
  main: "https://w3c.github.io/aria/#main",
  menu: "https://w3c.github.io/aria/#menu",
  menubar: "https://w3c.github.io/aria/#menubar",
  menuitem: "https://w3c.github.io/aria/#menuitem",
  menuitemcheckbox: "https://w3c.github.io/aria/#menuitemcheckbox",
  menuitemradio: "https://w3c.github.io/aria/#menuitemradio",
  marquee: "https://w3c.github.io/aria/#marquee",
  none: "https://w3c.github.io/aria/#none",
  note: "https://w3c.github.io/aria/#note",
  navigation:
    "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/navigation_role",
  option: "https://w3c.github.io/aria/#option",
  presentation: "https://w3c.github.io/aria/#presentation",
  region: "https://w3c.github.io/aria/#region",
  radio: "https://w3c.github.io/aria/#radio",
  radiogroup: "https://w3c.github.io/aria/#radiogroup",
  search: "https://w3c.github.io/aria/#search",
  switch: "https://w3c.github.io/aria/#switch",
  seperator: "https://w3c.github.io/aria/#separator",
  status: "https://w3c.github.io/aria/#status",
  tab: "https://w3c.github.io/aria/#tab",
  tablist: "https://w3c.github.io/aria/#tablist",
  tabpanel: "https://w3c.github.io/aria/#tabpanel",
  term: "https://w3c.github.io/aria/#term",
  treeitem: "https://w3c.github.io/aria/#treeitem",
  toolbar: "https://w3c.github.io/aria/#toolbar",
  tree: "https://w3c.github.io/aria/#tree",
  img: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/img_role",
  image: "https://w3c.github.io/aria/#image",
  progressbar: "https://w3c.github.io/aria/#progressbar",
  scrollbar: "https://w3c.github.io/aria/#scrollbar",
  slider: "https://w3c.github.io/aria/#slider",
  table:
    "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/table_role",
  columnheader: "https://w3c.github.io/aria/#columnheader",
  rowheader: "https://w3c.github.io/aria/#rowheader",
  rowgroup:
    "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/rowgroup_role",
  cell: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/cell_role",
  row: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/row_role",
  combobox: "https://w3c.github.io/aria/#combobox",
  textbox:
    "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role",
} as {
  [key: string]: string;
};
