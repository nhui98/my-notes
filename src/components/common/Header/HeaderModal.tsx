import { LINKS } from "@constants/data";
import { NextPage } from "next";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

const HeaderModal: NextPage<HeaderModalProps> = ({ isModalOpen, setModal }) => (
  <dialog
    open={isModalOpen}
    className="fixed top-0 z-50 h-screen w-screen bg-slate-900/80 p-8 backdrop-blur-sm lg:hidden"
  >
    <div
      className="fixed top-0 left-0 z-40 h-screen w-screen"
      onClick={() => setModal(false)}
    />
    <div className="absolute top-0 right-0 z-40 m-4 w-full max-w-sm rounded-lg bg-slate-800 p-8">
      <button
        onClick={() => setModal(false)}
        className="absolute right-8 cursor-pointer text-slate-200 hover:text-white"
      >
        <AiOutlineClose className="text-lg" />
      </button>
      <ul className="flex flex-col gap-y-4">
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
      <div className="my-8 h-[1px] w-full border-b border-slate-200/10" />
      <div>
        <Link href="https://github.com/nhui98">
          <a
            target="_blank"
            className="cursor-pointer font-semibold text-slate-200 transition duration-200 hover:text-blue-500"
          >
            Github
          </a>
        </Link>
      </div>
    </div>
  </dialog>
);

export default HeaderModal;

interface HeaderModalProps {
  isModalOpen: boolean;
  setModal: (state: boolean) => void;
}
