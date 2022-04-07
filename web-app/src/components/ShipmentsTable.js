import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_SHIPMENTS } from "../library/apollo/queries/shipmentsQueries";
import ErrorPage from "../pages/ErrorPage";
import LoadingPage from "../pages/LoadingPage";

export default function ShipmentsTable() {
  const [search, setSearch] = useState("");
  const { data, loading, error, refetch } = useQuery(GET_SHIPMENTS);
  const changeFilter = (e) => {
    const { value } = e.target;
    setSearch(value);
  };
  const setFilter = (e) => {
    e.preventDefault();
    refetch({ search });
    setSearch("");
  };
  if (loading) {
    return <LoadingPage />;
  }
  if (error) {
    return <ErrorPage />;
  }
  return (
    <div className="grow flex flex-col mt-3 justify-center bg-white px-8 drop-shadow-lg rounded-md">
      <div className="mt-5">
        <form className="flex justify-between items-center py-1" onSubmit={setFilter}>
          <input className="grow mr-2 rounded p-1 border focus:outline-none focus:ring-1 focus:ring-sky-300" placeholder="Search by TruckID or ProductID" value={search} onChange={changeFilter} />
          <button className="w-1/4 bg-sky-600 rounded text-white hover:bg-sky-700 p-1"> Search</button>
        </form>
      </div>
      <div className="mt-7">
        <h1 className="text-center text-xl font-semibold">Shipments Table</h1>
      </div>
      <div className="grow w-full mt-3">
        <table className="w-full text-center border-collapse border border-slate-300">
          <thead className="bg-sky-600 text-amber-50">
            <tr>
              <th className="py-1 border border-slate-300">ShipmentID</th>
              <th className="py-1 border border-slate-300">ShipmentDate</th>
              <th className="py-1  border border-slate-300">TruckID</th>
              <th className="py-1  border border-slate-300">TruckType</th>
              <th className="py-1  border border-slate-300">ProductID</th>
              <th className="py-1  border border-slate-300">ProductType</th>
              <th className="py-1  border border-slate-300">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {data?.getShipments.map((e) => {
              return (
                <tr className="hover:bg-sky-50" key={e.id}>
                  <td className=" border border-slate-300">{e.shipmentId}</td>
                  <td className=" border border-slate-300">{e.shipmentDate}</td>
                  <td className=" border border-slate-300">{e.truckId}</td>
                  <td className=" border border-slate-300">{e.truckType}</td>
                  <td className=" border border-slate-300">{e.productId}</td>
                  <td className=" border border-slate-300">{e.productType}</td>
                  <td className=" border border-slate-300">{e.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
