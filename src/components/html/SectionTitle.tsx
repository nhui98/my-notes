import { NextPage } from "next";

const SectionTitle: NextPage<SectionTitleProps> = ({ title }) => (
  <h3 className="my-4 border-b border-slate-50/10 py-2 text-lg font-bold text-white">
    {title}
  </h3>
);

export default SectionTitle;

interface SectionTitleProps {
  title: string;
}
