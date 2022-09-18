import { NextPage } from "next";

const Tag: NextPage<HtmlTagProps> = ({ tag }) => (
  <code className="text-pink-400">&#60;{tag}&#62;</code>
);

export default Tag;

interface HtmlTagProps {
  tag: string;
}
