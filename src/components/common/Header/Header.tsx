import { LINKS } from "@constants/data";
import Link from "next/link";
import { useState } from "react";
import { AiFillGithub, AiOutlineMore } from "react-icons/ai";

import HeaderModal from "./HeaderModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const setModal = (state: boolean) => {
    setIsModalOpen(state);
    state
      ? (window.document.body.style.overflowY = "hidden")
      : (window.document.body.style.overflowY = "auto");
  };

  return (
    <>
      <HeaderModal isModalOpen={isModalOpen} setModal={setModal} />
      <nav className="border-b border-slate-300/10 bg-slate-900">
        <div className="m-auto max-w-[90rem] px-4 md:px-8">
          <div className="flex h-20 items-center ">
            {/* Logo */}
            <div className="cursor-pointer">
              <Link href={`/`}>
                <h1 className="text-4xl font-semibold text-slate-50">Notes</h1>
              </Link>
            </div>
            {/* Links */}
            <div className="hidden pl-20 lg:block">
              <ul className="flex gap-x-8">
                {LINKS.map(({ id, href, link }) => (
                  <li key={id}>
                    <Link href={href}>
                      <a className="cursor-pointer font-semibold text-slate-200 transition duration-200 hover:text-blue-500">
                        {link}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Icons */}
            <div className="ml-auto flex">
              <div className="hidden lg:block">
                <a
                  href="https://github.com/nhui98"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub className="text-2xl transition duration-300 hover:scale-110 hover:text-white" />
                </a>
              </div>

              <button className="lg:hidden" onClick={() => setModal(true)}>
                <AiOutlineMore className="cursor-pointer text-2xl transition duration-300 hover:scale-110 hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
