import Flyout from "@components/common/Flyout/Flyout";
import Sidebar from "@components/common/Sidebar/Sidebar";
import { SIDEBAR_LINKS } from "@constants/data-css";
import { PATH_MAP } from "@utils/mappings/paths-css";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Css: NextPage<CssProps> = ({ slug }) => {
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
        <title>Notes | CSS</title>
      </Head>

      <Flyout links={SIDEBAR_LINKS} selectedLink={selectedLink} />
      <Sidebar links={SIDEBAR_LINKS} selectedLink={selectedLink} />
      <main className="py-8 lg:pl-60">{PATH_MAP[slug]}</main>
    </div>
  );
};

export default Css;

interface CssProps {
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
