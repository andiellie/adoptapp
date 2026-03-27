import { Outlet, useLocation } from "react-router";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

export function Root() {
  const location = useLocation();
  
  // Don't show footer on adoption form page
  const showFooter = !location.pathname.includes('/formulario');

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="flex-1">
        <Outlet />
      </div>
      {showFooter && <Footer />}
    </div>
  );
}