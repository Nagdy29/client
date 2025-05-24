import React, { useState } from "react";
import { userBookingsDummyData } from "../assets/assets";
import { CiLocationOn } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import { data } from "react-router-dom";

const Booking = () => {
  const [booking, setBooking] = useState(userBookingsDummyData);

  return (
    <>
      <div>
        <div className="flex justify-start items-start px-14 py-8 mt-8  flex-col pt-16   ">
          <h1 className=" font-semibold text-lg md:text-3xl   ">
            My Bookings{" "}
          </h1>
          <p className="py-2 max-w-xl font-extralight">
            Easily manage your past, current, and upcoming hotel reservations in
            one place. Plan your trips seamlessly with just a few clicks
          </p>
        </div>

        <div className="max-w-6xl mt-8 w-full text-gray-800 ps-40 ">
          <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-4 ps-24 ">
            <div>Hotels</div>
            <div> Date & Timings </div>
            <div> Payment</div>
          </div>
          {booking.map((booking) => (
            <div
              key={booking._id}
              className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t "
            >
              <div className="flex flex-col md:flex-row">
                <img
                  src={booking.room.images[0]}
                  alt=""
                  className=" w-48 md:w-40  rounded shadow object-cover"
                />
                <div className="ps-4 items-center">
                  <div className="items-center gap-1 text-sm text-gray-500">
                    <h2>
                      {" "}
                      {booking.hotel.name}{" "}
                      <span> ({booking.room.roomType}) </span>{" "}
                    </h2>
                  </div>
                  <div className=" flex  flex-row py-2 items-center gap-1">
                    <p>
                      <CiLocationOn size={20} />
                    </p>
                    <p className="font-mono text-sm">{booking.hotel.address}</p>
                  </div>
                  <div>
                    <div>
                      <p className="flex flex-row gap-1  items-center">
                        {" "}
                        <IoPerson /> Guests:{booking.guests}{" "}
                      </p>
                      <p>Total : ${booking.totalPrice} </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div>
                  <p>Check-In:</p>
                  <p className="text-gray-500 text-sm">
                    {" "}
                    {new Date(booking.checkInDate).toDateString()}{" "}
                  </p>
                </div>
                <div>
                  <p>Check-out:</p>
                  <p className="text-gray-500 text-sm">
                    {" "}
                    {new Date(booking.checkOutDate).toDateString()}{" "}
                  </p>
                </div>
              </div>
           <div className="">
               <div className="flex flex-col items-center justify-center pt-3 gap-8 ">
                <div className="flex items-center justify-center  gap-2">
                  <div
                    className={`h-3 w-3 rounded-full ${
                      booking.isPaid ? "bg-green-500" : "text-red-500"
                    }`}
                  ></div>
                  <p
                    className={`h-3 w-3 rounded-full ${
                      booking.isPaid ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {booking.isPaid ? "paid" : "Unpaid"}
                  </p>
                </div>
                <div>
                  {!booking.isPaid && (
                    <button className="px-4 py-1.5 text-xs border border-gray-400 rounded-full hover:bg-gray-50 transition-all cursor-pointer ">
                      {" "}
                      Pay Now{" "}
                    </button>
                  )}
                </div>
              </div>
           </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Booking;
