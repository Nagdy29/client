import React from 'react'
import { exclusiveOffers } from '../assets/assets'

const Offers = () => {
  const data = exclusiveOffers
  
  return (
    <div>
          <div className="flex justify-start py-3 flex-col mt-20 md:mt-14 ps-5 ">
          <h1 className=" font-semibold text-lg md:text-3xl   ">
            Exclusive Offers
          </h1>
          <p className="py-2 max-w-xl font-extralight">
            Discover our handpicked selection of exceptional properties around
            the world, offering unparalleled luxury and unforgettable
            experiences
          </p>
        </div>
        {/* carrrrrd */}

        <div className='flex justify-center items-center py-3 gap-3 flex-row'>
          <div className='flex lg:flex-row gap-8 flex-col   '>
   {
    data.map((offer , index)=> (
               <div class="relative flex items-center justify-center text-sm text-white/80 rounded-lg shadow-sm max-w-96">
    <div class="absolute bottom-2 flex flex-col items-start ps-5 justify-start   w-full max-w-96 h-44 rounded  py-8">
       <p class="text-center py-1"> {offer.title} </p>
        <p class="text-start py-1 "> {offer.description} </p>
        <button type="" class=" px-6 py-1.5"> Expires {offer.expiryDate} </button>
         <p class="text-center py-1 rounded-full cursor-pointer bg-slate-50/90 text-black p-5"> View Offers  </p>
    </div>
    <img class="rounded-md" src={offer.image} alt="girlWithHeadphone"/>
</div>
    ))
   }
          </div>
        </div>
    </div>
  )
}

export default Offers
