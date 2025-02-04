import { DesktopNav } from "@src/components/nav/DesktopNav";
import { MobileNav } from "@src/components/nav/MobileNav";

import React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <nav>
        <DesktopNav />
        <MobileNav />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
