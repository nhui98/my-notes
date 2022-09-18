import Header from "@components/common/Header/Header";
import { NextPage } from "next";
import { ReactNode } from "react";

const Layout: NextPage<LayoutProps> = ({ children }) => (
  <div>
    <Header />
    <div className="m-auto max-w-[90rem] px-4 md:px-8">{children}</div>
  </div>
);

export default Layout;

interface LayoutProps {
  children: ReactNode;
}
