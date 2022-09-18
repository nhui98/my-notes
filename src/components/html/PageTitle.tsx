import { NextPage } from "next";

const PageTitle: NextPage<PageTitleProps> = ({
  heading,
  subheading,
  description,
}) => (
  <div className="flex flex-col gap-y-2 py-8">
    <h1 className="text-sm font-bold text-sky-400">{heading}</h1>
    <h2 className="text-4xl font-bold text-white">{subheading}</h2>
    {description && <div className="text-xl font-semibold">{description}</div>}
  </div>
);

export default PageTitle;

interface PageTitleProps {
  heading: string;
  subheading: string;
  description?: string;
}
