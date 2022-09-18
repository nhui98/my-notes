import SectionTitle from "../SectionTitle";
import {
  AddressTag,
  ArticleTag,
  AsideTag,
  FooterTag,
  HeaderTag,
  HeadingsTag,
  MainTag,
  NavTag,
  SectionTag,
} from "../tags";

const ContentSectioning = () => (
  <section className="html-section">
    <SectionTitle title="Content Sectioning" />
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
