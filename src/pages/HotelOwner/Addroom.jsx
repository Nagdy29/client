import React, { useState } from "react";

const Addroom = () => {
  const [roomType, setRoomType] = useState("");
  const [price, setPrice] = useState("");
  const [services, setServices] = useState({
    wifi: false,
    breakfast: false,
    roomService: false,
  });
  const [images, setImages] = useState([]);

  const handleServiceChange = (e) => {
    const { name, checked } = e.target;
    setServices((prev) => ({ ...prev, [name]: checked }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 4);
    setImages(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      roomType,
      price,
      services,
      images,
    };
    console.log(formData);
    alert("Room submitted!");
  };

  return (
    <div className="p-6 md:p-10 max-w-3xl mx-auto">
             <h2 className="text-3xl font-bold mb-2">Add Room</h2>
    <p className="text-gray-600 mb-6">
      Fill in the details carefully and accurate room details, pricing, and amenities, to enhance the user booking experience.
    </p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-6">
        {/* Room Type */}
        <div>
          <label className="block mb-2 font-medium">Room Type</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block mb-2 font-medium">Price (per night)</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        {/* Services */}
        <div>
          <label className="block mb-2 font-medium">Services</label>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="wifi"
                checked={services.wifi}
                onChange={handleServiceChange}
              />
              Free WiFi
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="breakfast"
                checked={services.breakfast}
                onChange={handleServiceChange}
              />
              Free Breakfast
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="roomService"
                checked={services.roomService}
                onChange={handleServiceChange}
              />
              Room Service
            </label>
          </div>
        </div>

        {/* Images */}
        <div>
          <label className="block mb-2 font-medium">Upload Room Images (max 4)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="w-full"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Submit Room
        </button>
      </form>
    </div>
  );
};

export default Addroom;
