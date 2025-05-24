import React from "react";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { roomsDummyData } from "../assets/assets";

const CardHotel = () => {
    const data = roomsDummyData
    // console.log(data);
    
  return (
    <>
      <div className="bg-[#f5f8fb]">
        <div className="flex justify-center items-center  flex-col pt-16  ">
          <h1 className=" font-semibold text-lg md:text-3xl   ">
            Exclusive Offers
          </h1>
          <p className="py-2 max-w-xl font-extralight">
            Discover our handpicked selection of exceptional properties around
            the world, offering unparalleled luxury and unforgettable
            experiences
          </p>
        </div>
        {/* carrrd */}
        <div className="py-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  ps-4 justify-center    ">
        {
            data.map((room , index)=>(
                  <Link to={'/rooms/'+room._id} >
            <div>
              <div class="p-4 bg-white rounded-lg shadow-sm text-sm max-w-80 hover:shadow-lg mb-4">
                <img
                  class="rounded-md max-h-40 w-full object-cover"
                  src={room.images[0]}
                  alt="officeImage"
                />
                <p class="text-gray-900 text-xl font-semibold ml-2 mt-2">
                 {room.hotel.name}
                </p>
                <div className="flex flex-row items-center gap-1">
                  <p>
                    <CiLocationOn size={20} />
                  </p>
                  <p className="font-mono text-sm">{room.hotel.city}</p>
                </div>
                <div className="flex justify-between items-center ">
                  <p className="font-semibold text-lg text-black">${room.pricePerNight}  </p>
                  <button
                    type="button"
                    class="bg-white border border-black mt-4 mb-3 ml-2 px-6 py-2 font-medium rounded text-black"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </Link>
            )  )
        }
        </div>

        {/* button */}
        <div className="flex justify-center py-16 md:py-28 items-center">
          <Link to="/romms">
              <button type="button" class="w-40 py-3 active:scale-95 transition text-sm text-gray-500 border border-indigo-500 rounded-lg bg-transparent"><p class="mb-0.5">View All Hotels</p></button>

          </Link>
        </div>
      </div>
    </>
  );
};

export default CardHotel;
