import React, { useState } from "react";
import { assets, dashboardDummyData } from "../../assets/assets";

const Dasbord = () => {
  const [dashBord, setDasbordDtaa] = useState(dashboardDummyData);
  return (
    <>
      <div>
        <div>
          <div className="flex justify-start items-start px-14 py-8 mt-8  flex-col pt-16   ">
            <h1 className=" font-semibold text-lg md:text-3xl   ">Dashboard</h1>
            <p className="py-2 max-w-xl font-extralight">
              Take advantage of our limited-time offers and special packages to
              enhance your stay and create unforgettable memories.
            </p>
          </div>
          <div className="flex gap-4 my-8 ">
            {/* total booking */}
            <div className="bg-slate-600/30 border rounded-full p-4 pr-8  flex">
              <img
                src={assets.totalBookingIcon}
                className="max-sm:hidden h-10"
                alt=""
              />
              <div className=" flex flex-col sm:ml-4 font-medium">
                <p className="text-blue-500">Total Booking</p>
                <p className=""> {dashboardDummyData.totalBookings} </p>
              </div>
            </div>
            <div className="bg-slate-600/30 border rounded-full p-4 pr-8  flex">
              <img
                src={assets.totalRevenueIcon}
                className="max-sm:hidden h-10"
                alt=""
              />
              <div className=" flex flex-col sm:ml-4 font-medium">
                <p className="text-blue-500">totalRevenue</p>
                <p className=""> {dashboardDummyData.totalRevenue} </p>
              </div>
            </div>
          </div>
        </div>
        {/* recent booking */}
        <h2 className="text-xl text-blue-950/70 font-medium mb-5">
          {" "}
          Recent Bookings{" "}
        </h2>
        <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll">
          <table className="w-full ">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-4 text-gray-800 font-medium">
                  User Name
                </th>
                <th className="py-3 px-4 text-gray-800 font-medium">
                  Room Name
                </th>
                <th className="py-3 px-4 text-gray-800 font-medium">
                  Total Amount
                </th>
                <th className="py-3 px-4 text-gray-800 font-medium text-center">
                  Payment Status
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {dashBord.bookings.map((item, index) => (
                <tr>
                  <td className="py-3 px-4 text-gray-700 border-t border-gray-300">
                    {" "}
                    {item.user.username}{" "}
                  </td>
                  <td className="py-3 px-4 text-gray-700 border-t border-gray-300">
                    {" "}
                    {item.room.roomType}{" "}
                  </td>
                  <td className="py-3 px-4 text-gray-700 border-t border-gray-300">
                    {" "}
                    {item.totalPrice}{" "}
                  </td>
                  <td className="py-3 px-4 text-gray-700 border-t border-gray-300">
                    {" "}
                    <button
                      className={`py-1 px-3 text-sm rounded-full mx-auto ${
                        item.isPaid
                          ? "bg-green-200 text-green-600 "
                          : "bg-amber-200 text-yellow-600 "
                      }`}
                    >
                        {item.isPaid ? "completed" : 'pending'}
                        </button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dasbord;
