import React from "react";
import { roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaWifi } from "react-icons/fa6";
import { FaCoffee } from "react-icons/fa";
import { MdOutlineRoomService } from "react-icons/md";

const AllRooms = () => {
  const data = roomsDummyData;
  console.log(data);
  const navagite = useNavigate();
  return (
    <>
      <div className=" py-9 md:py-14 flex lg:flex-row flex-col-reverse justify-between px-4 md:px-16 ">
        <div>
          <div className="flex justify-start items-start px-14 py-8 mt-8  flex-col pt-16   ">
            <h1 className=" font-semibold text-lg md:text-3xl   ">
              Hotel Rooms{" "}
            </h1>
            <p className="py-2 max-w-xl font-extralight">
              Take advantage of our limited-time offers and special packages to
              enhance your stay and create unforgettable memories.
            </p>
          </div>
          {/* carrrrrrrd */}
          <div className="flex gap-6 flex-col py-5" >
            {data.map((rom, index) => (
              <div class="flex flex-col md:flex-row items-center  justify-around text-sm border border-gray-200 rounded-2xl m-2 max-w-4xl w-full bg-white">
                <img
                  onClick={() => {
                    navagite(`/rooms/${rom._id}`);
                  }}
                  class="max-w-[325px] pt-10 md:p-0 cursor-pointer"
                  src={rom.images[0]}
                  alt="excitedWomenImage"
                />

                <div class="flex flex-col text-center md:text-left items-center md:items-start pt-14 md:p-10">
                  <div className="flex flex-col gap-5 ">
                    <p className="font-thin text-[14px]"> {rom.hotel.city} </p>
                    <h2 className="font-semibold text-lg">
                      {" "}
                      {rom.hotel.name}{" "}
                    </h2>
                    <div className="flex flex-row items-center gap-1">
                      <p>
                        <CiLocationOn size={20} />
                      </p>
                      <p className="font-mono text-sm">{rom.hotel.address}</p>
                    </div>
                    {/* icon */}
                    <div className="flex justify-center items-center gap-2 md:flex-row flex-col">
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
                    <p className="font-extralight text-black text-[20px] mb-7 ">
                      {" "}
                      $ {rom.pricePerNight} / day{" "}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* left */}
        <div className="py-20">
          <form class="bg-white text-gray-500 w-full max-w-[350px] mx-4 md:p-6 p-4 text-left text-sm rounded shadow-[0px_0px_10px_0px] shadow-black/10">
            <h2 class="text-2xl font-semibold mb-6 text-start text-gray-800  border-b-2">
              Filters
            </h2>
            <div>
                          <h2 class="text-xl font-semibold mb-6 text-start text-gray-800">
              Popular filters
            </h2>
              <div className="flex flex-col gap-2">
                <label class="flex gap-3 items-center cursor-pointer">
                  <input type="checkbox" class="hidden peer" />
                  <span class="w-5 h-5 border border-slate-300 rounded relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-blue-600 peer-checked:border-blue-600 peer-checked:after:rounded peer-checked:after:absolute"></span>
                  <span class="text-gray-700 select-none">Family Suite </span>
                </label>
                <label class="flex gap-3 items-center cursor-pointer">
                  <input type="checkbox" class="hidden peer" />
                  <span class="w-5 h-5 border border-slate-300 rounded relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-blue-600 peer-checked:border-blue-600 peer-checked:after:rounded peer-checked:after:absolute"></span>
                  <span class="text-gray-700 select-none">Double Bed </span>
                </label>
                <label class="flex gap-3 items-center cursor-pointer">
                  <input type="checkbox" class="hidden peer" />
                  <span class="w-5 h-5 border border-slate-300 rounded relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-blue-600 peer-checked:border-blue-600 peer-checked:after:rounded peer-checked:after:absolute"></span>
                  <span class="text-gray-700 select-none">Luxury Room </span>
                </label>
                <label class="flex gap-3 items-center cursor-pointer">
                  <input type="checkbox" class="hidden peer" />
                  <span class="w-5 h-5 border border-slate-300 rounded relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-blue-600 peer-checked:border-blue-600 peer-checked:after:rounded peer-checked:after:absolute"></span>
                  <span class="text-gray-700 select-none">Single Bed </span>
                </label>
              </div>
            </div>
                <h2 class="text-2xl font-semibold mb-6 text-start text-gray-800">
              Price
            </h2>
            <div>
              <div className="flex flex-col gap-2">
                <label class="flex gap-3 items-center cursor-pointer">
                  <input type="checkbox" class="hidden peer" />
                  <span class="w-5 h-5 border border-slate-300 rounded relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-blue-600 peer-checked:border-blue-600 peer-checked:after:rounded peer-checked:after:absolute"></span>
                  <span class="text-gray-700 select-none"> ₹2500 to ₹5000 </span>
                </label>
                <label class="flex gap-3 items-center cursor-pointer">
                  <input type="checkbox" class="hidden peer" />
                  <span class="w-5 h-5 border border-slate-300 rounded relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-blue-600 peer-checked:border-blue-600 peer-checked:after:rounded peer-checked:after:absolute"></span>
                  <span class="text-gray-700 select-none"> ₹5000 to ₹8000 </span>
                </label>
       
                <label class="flex gap-3 items-center cursor-pointer">
                  <input type="checkbox" class="hidden peer" />
                  <span class="w-5 h-5 border border-slate-300 rounded relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-blue-600 peer-checked:border-blue-600 peer-checked:after:rounded peer-checked:after:absolute"></span>
                  <span class="text-gray-700 select-none"> ₹8000 to ₹15000 </span>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AllRooms;
