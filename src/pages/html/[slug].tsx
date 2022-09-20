import Flyout from "@components/common/Flyout/Flyout";
import Sidebar from "@components/common/Sidebar/Sidebar";
import PageTitle from "@components/html/PageTitle";
import { SIDEBAR_LINKS } from "@constants/data-html";
import { PATH_MAP } from "@utils/mappings/path-html";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Html: NextPage<HtmlProps> = ({ slug }) => {
  const [selectedLink, setSelectedLink] = useState("");
  const router = useRouter();

  useEffect(() => {
    const paths = router.asPath.split("/");
    paths.shift();
    setSelectedLink(paths.join("-"));
  }, [router.asPath]);

  return (
    <div>
      <Head>
        <title>Notes | HTML</title>
      </Head>

      <Flyout links={SIDEBAR_LINKS} selectedLink={selectedLink} />
      <Sidebar links={SIDEBAR_LINKS} selectedLink={selectedLink} />
      <main className="py-8 lg:pl-60">
        <PageTitle heading="HTML" subheading="Elements" />
        {PATH_MAP[slug]}
      </main>
    </div>
  );
};

export default Html;

interface HtmlProps {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = [];
  for (const key in PATH_MAP) {
    paths.push({ params: { slug: key } });
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = (context) => {
  const slug = context.params?.slug;
  if (!slug || Array.isArray(slug)) return { notFound: true };

  return {
    props: {
      slug,
    },
  };
};
