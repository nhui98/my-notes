import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Flyout: NextPage<FlyoutProps> = ({ links }) => {
  const [selectedLink, setSelectedLink] = useState("");
  const [flyoutOpen, setFlyoutOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const paths = router.route.split("/");
    paths.shift();
    const id = paths.join("-");

    setSelectedLink(id);
  }, [router.route]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

    function handleResize() {
      setFlyout(false);
    }
  }, []);

  const setFlyout = (state: boolean) => {
    setFlyoutOpen(state);
    state
      ? (window.document.body.style.overflowY = "hidden")
      : (window.document.body.style.overflowY = "auto");
  };

  return (
    <>
      <div
        className={`fixed top-0 h-screen w-screen bg-slate-900/80 p-8 backdrop-blur-sm lg:hidden ${
          flyoutOpen ? "block" : "hidden"
        }`}
        onClick={() => setFlyout(false)}
      />
      <div
        className={`fixed -left-8 flex h-16 w-16 cursor-pointer items-center justify-end rounded-full border border-slate-50/10 bg-slate-900 pr-2 transition duration-500 lg:hidden ${
          flyoutOpen ? "translate-x-[16rem]" : "translate-x-[0rem]"
        }`}
        onClick={() => setFlyout(!flyoutOpen)}
      >
        {flyoutOpen ? (
          <AiOutlineLeft className="text-2xl" />
        ) : (
          <AiOutlineRight className="text-2xl" />
        )}
      </div>
      <div
        className={`z-60 fixed left-0 h-full w-[16rem] overflow-auto border-r border-slate-50/10 bg-slate-900 px-4 transition duration-500 lg:hidden ${
          flyoutOpen ? "translate-x-[0rem]" : "translate-x-[-16rem]"
        }`}
      >
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
    </>
  );
};

export default Flyout;

interface FlyoutProps {
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
