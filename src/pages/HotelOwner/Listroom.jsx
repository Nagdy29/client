import React from "react";

const Listroom = () => {
  const rooms = [
    {
      name: "Double Bed",
      facilities: "Room Service, Mountain View, Pool Access",
      price: 399,
    },
    {
      name: "Double Bed",
      facilities: "Room Service, Mountain View, Pool Access",
      price: 299,
    },
    {
      name: "Double Bed",
      facilities: "Free WiFi, Free Breakfast, Room Service",
      price: 249,
    },
    {
      name: "Single Bed",
      facilities: "Free WiFi, Room Service, Pool Access",
      price: 199,
    },
  ];

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-2">Room Listings</h2>
      <p className="text-gray-600 mb-6">
        View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for users.
      </p>

      <div className="bg-white shadow-md rounded-xl overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100 text-left text-sm text-gray-700">
            <tr>
              <th className="px-6 py-3 font-medium">Name</th>
              <th className="px-6 py-3 font-medium">Facility</th>
              <th className="px-6 py-3 font-medium">Price / night</th>
              <th className="px-6 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800">
            {rooms.map((room, index) => (
              <tr key={index} className="border-t">
                <td className="px-6 py-4">{room.name}</td>
                <td className="px-6 py-4">{room.facilities}</td>
                <td className="px-6 py-4">{room.price}</td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:underline mr-2">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Listroom;
