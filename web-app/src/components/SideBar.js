import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <>
      {showSidebar ? (
        <div className="top-0 left-0 w-[30vw] bg-sky-700  p-10 text-white min-h-full ">
          <button onClick={() => setShowSidebar(!showSidebar)} className="border-2 border-white rounded-xl p-1 text-xl align-middle">
            {<IoClose />}
          </button>
          <h2 className="my-5 text-4xl font-semibold text-yellow-300">Marine Tech</h2>
          <div className="flex flex-col">
            <Link className="text-xl mb-2" to="/">
              Ships
            </Link>
            <Link className="text-xl mb-2" to="/shipments">
              Shipments
            </Link>
            <p className="text-xl mb-2">Log out</p>
          </div>
        </div>
      ) : (
        <svg onClick={() => setShowSidebar(!showSidebar)} className="fixed  z-30 flex items-center cursor-pointer left-6 top-6" fill="rgb(3 105 161)" viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}
    </>
  );
}
