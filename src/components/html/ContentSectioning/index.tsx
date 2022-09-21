import PageTitle from "../PageTitle";
import AddressTag from "./AddressTag";
import ArticleTag from "./ArticleTag";
import AsideTag from "./AsideTag";
import FooterTag from "./FooterTag";
import HeaderTag from "./HeaderTag";
import HeadingsTag from "./HeadingsTag";
import MainTag from "./MainTag";
import NavTag from "./NavTag";
import SectionTag from "./SectionTag";

const ContentSectioning = () => (
  <section className="html-section">
    <PageTitle
      heading="HTML"
      subheading="Elements"
      description="Content Sectioning"
    />
    <div className="html-section-layout">
      <AddressTag />
      <ArticleTag />
      <AsideTag />
      <FooterTag />
      <HeaderTag />
      <HeadingsTag />
      <MainTag />
      <NavTag />
      <SectionTag />
    </div>
  </section>
);

export default ContentSectioning;
