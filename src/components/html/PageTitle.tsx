import { NextPage } from "next";

const PageTitle: NextPage<PageTitleProps> = ({
  heading,
  subheading,
  description,
}) => (
  <div className="flex flex-col gap-y-2">
    <h1 className="text-sm font-bold text-sky-400">{heading}</h1>
    <h2 className="text-4xl font-bold text-white">{subheading}</h2>
    {description && (
      <div className="mb-8 border-b border-slate-50/10 pb-4 text-xl font-semibold">
        {description}
      </div>
    )}
  </div>
);

export default PageTitle;

interface PageTitleProps {
  heading: string;
  subheading: string;
  description?: string;
}
