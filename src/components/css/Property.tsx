import { NextPage } from "next";

const Property: NextPage<PropertyProps> = ({ property }) => (
  <code className="text-indigo-600">{property}</code>
);

export default Property;

interface PropertyProps {
  property: string;
}
