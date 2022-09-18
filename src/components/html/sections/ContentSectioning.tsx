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
    <div className="flex flex-col gap-y-8">
      <SectionTag />
      <MainTag />
      <NavTag />
      <HeaderTag />
      <FooterTag />
      <AsideTag />
      <AddressTag />
      <ArticleTag />
      <HeadingsTag />
    </div>
  </section>
);

export default ContentSectioning;
