import { NextPage } from "next";

const Value: NextPage<ValueProps> = ({ value }) => (
  <code className="text-sky-600">{value}</code>
);

export default Value;

interface ValueProps {
  value: string;
}
