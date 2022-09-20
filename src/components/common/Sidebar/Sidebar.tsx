import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Sidebar: NextPage<SidebarProps> = ({ links }) => {
  const [selectedLink, setSelectedLink] = useState("");

  const router = useRouter();

  useEffect(() => {
    const paths = router.route.split("/");
    paths.shift();
    const id = paths.join("-");

    setSelectedLink(id);
  }, [router.route]);

  return (
    <div className="fixed hidden h-full w-[15rem] overflow-auto lg:block">
      <ul className="space-y-8 py-8">
        {links.map(({ id, links, heading }) => (
          <li key={id}>
            <h2 className="text-white">{heading}</h2>
            <div className="mt-2 flex flex-col">
              {links.map(({ slug, text, href }) => (
                <Link href={href} key={slug}>
                  <a
                    className={`hover: border-l border-slate-50/10 py-1 pl-4 ${
                      selectedLink === slug
                        ? "border-sky-400 text-sky-400"
                        : "transition duration-200 hover:border-slate-50/50 hover:text-slate-50"
                    } `}
                  >
                    {text}
                  </a>
                </Link>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

interface SidebarProps {
  links: {
    id: number;
    heading: string;
    links: {
      slug: string;
      text: string;
      href: string;
    }[];
  }[];
}
