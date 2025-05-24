import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { roomsDummyData } from "../assets/assets";
import { CiLocationOn } from "react-icons/ci";
import { FaWifi } from "react-icons/fa6";
import { FaCoffee } from "react-icons/fa";
import { MdOutlineRoomService } from "react-icons/md";

const Detialsroom = () => {
  const { id } = useParams(); // ← get ID from URL
  const [room, setRoom] = useState(null);
  const [image, setMainImage] = useState(null);

  useEffect(() => {
    // simulate fetching room data by id from roomsDummyData
    const foundRoom = roomsDummyData.find((r) => r._id === id);
    setRoom(foundRoom);
  }, [id]);

  if (!room) return <p>Loading...</p>;
  return (
    <>
      <div>
        <div className="p-8 py-32 border-b-2  ">
          <h1 className="text-3xl font-semibold">
            {room.hotel.name}{" "}
            <span className="text-sm font-mono"> ({room.roomType}) </span>{" "}
          </h1>
          <div className="flex flex-row items-center gap-1 py-3">
            <p>
              <CiLocationOn size={20} />
            </p>
            <p className="font-mono text-sm">{room.hotel.address}</p>
          </div>
          <div className="flex flex-col lg:flex-row mt-6 gap-6">
            <div className="lg:w-1/2 w-full">
              <img
                src={room.images[0]}
                alt="room"
                className="w-full  my-4"
              />
            </div>
            <div className="grid grid-cols-2 gap-1 lg:w-1/2 w-full">
              {room.images.length > 1 &&
                room.images.map((image, index) => (
                  <img
                    onClick={() => setMainImage(image)}
                    src={image}
                    alt="room"
                    className=" my-4 w-80 shadow-md object-cover outline-4 outline-orange-500"
                  />
                ))}
            </div>
          </div>
          <div>
            
         <div className="flex justify-between items-center ps-4 ms-5 font-medium md:text-2xl  ">
            <h2>Experience Luxury Like Never Befores</h2>
             <p className="text-xl  md:text-4xl"> ${room.pricePerNight}/ day </p>
         </div>
                  <div className="flex justify-start items-center gap-2 md:flex-row flex-col ps-6">
                                 <div className="rounded-lg bg-[#f5f5ff]/50 px-3 py-2 flex justify-self-center items-center ">
                                     <FaWifi/>
                                     <p>free wifi</p>
         
                                 </div>
                                   <div className="rounded-lg bg-[#f5f5ff]/50 px-3 py-2 flex justify-self-center items-center ">
                                     <FaCoffee/>
                                     <p>free breakfast</p>
         
                                 </div>
                                   <div className="rounded-lg bg-[#f5f5ff]/50 px-3 py-2 flex justify-self-center items-center ">
                                     <MdOutlineRoomService/>
                                     <p>room service</p>
         
                                 </div>
                             </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Detialsroom;
