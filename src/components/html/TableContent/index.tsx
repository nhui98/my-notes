import PageTitle from "../PageTitle";
import CaptionTag from "./CaptionTag";
import ColGroupTag from "./ColGroupTag";
import ColTag from "./ColTag";
import TableTag from "./TableTag";
import TbodyTag from "./TbodyTag";
import TdTag from "./TdTag";
import TfootTag from "./TfootTag";
import TheadTag from "./TheadTag";
import ThTag from "./ThTag";
import TrTag from "./TrTag";

const TableContents = () => (
  <section className="html-section">
    <PageTitle
      heading="HTML"
      subheading="Elements"
      description="Table Contents"
    />
    <div className="html-section-layout">
      <CaptionTag />
      <ColGroupTag />
      <ColTag />
      <TableTag />
      <TheadTag />
      <TbodyTag />
      <TfootTag />
      <ThTag />
      <TrTag />
      <TdTag />
    </div>
  </section>
);

export default TableContents;
