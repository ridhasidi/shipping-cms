import Sidebar from "../components/SideBar";

export default function HomePage() {
  return (
    <section className="flex flex-row items-center justify-center min-h-screen bg-gray-300 items-stretch">
      <Sidebar />
      <div className="grow bg-blue-100 min-h-full w-full px-24 py-16">
        <h1 className="text-center text-3xl font-bold text-sky-700">Dashboard</h1>
      </div>
    </section>
  );
}
