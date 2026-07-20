import { Outlet } from "react-router-dom";

import Header from "../shared/ui/Header/Header";
import Footer from "../shared/ui/Footer/Footer";
import Background from "../shared/ui/Background/Background";

function AppLayout() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Background />

      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
