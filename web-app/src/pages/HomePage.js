import { Outlet, useLocation } from "react-router-dom";
import ShipsTable from "../components/ShipsTable";
import Sidebar from "../components/SideBar";

export default function HomePage() {
  const { pathname } = useLocation();
  return (
    <section className="flex flex-row items-center justify-center min-h-screen bg-sky-300 items-stretch">
      <Sidebar />
      <div className="grow flex flex-col bg-sky-50 min-h-full w-full px-16 py-10">
        <div>
          <h1 className="text-center text-3xl font-bold text-sky-700">Dashboard</h1>
        </div>

        {pathname === "/" ? <ShipsTable /> : <Outlet />}
      </div>
    </section>
  );
}
