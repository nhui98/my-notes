import { NextPage } from "next";

const Property: NextPage<HtmlTagProps> = ({ property }) => (
  <code className="text-indigo-600">{property}</code>
);

export default Property;

interface HtmlTagProps {
  property: string;
}
