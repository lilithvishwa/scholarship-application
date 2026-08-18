import { Outlet } from "react-router-dom";

import Header from "../shared/ui/Header/Header";
import Footer from "../shared/ui/Footer/Footer";
import Background from "../shared/ui/Background/Background";
import type { AppLayoutProps } from "@/types/route.type";

function AppLayout({ variant }: AppLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Background />

      <Header variant={variant} />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
