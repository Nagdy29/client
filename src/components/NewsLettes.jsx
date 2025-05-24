import React from "react";

const NewsLettes = () => {
  return (
    <>
      <div className="flex justify-center text-white mb-24">
        <div class="flex flex-col items-center justify-center bg-[#111827] py-16 px-4 mt-5 mb-10 max-w-4xl w-full text-center border border-gray-200 rounded-2xl">
          <h1 class="text-3xl sm:text-4xl font-semibold sm:font-bold text-white">
            Stay Inspired
          </h1>
          <p class="max-w-2xl text-slate-500 mt-4 max-sm:text-sm">
           Join our newsletter and be the first to discover new destinations, exclusive offers, and travel inspiration.
          </p>
          <div className="py-7">
            <div class="flex items-center gap-3 max-w-md w-full">
    <div class="flex items-center w-full border pl-3 gap-2 bg-white border-gray-500/30 h-[46px] rounded-md overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 30 30" fill="#6B7280">
            <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8"/>
        </svg>
        <input type="text" placeholder="Enter your email" class="w-full h-full outline-none text-gray-500 placeholder-gray-500 text-sm"/>
    </div>
    <button type="submit" class="bg-indigo-500 w-32 h-[46px] rounded-md text-sm text-white">Subscribe</button>
</div>
          </div>
             <p class="max-w-2xl text-slate-500 mt-4 max-sm:text-sm">
          By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
    
  
        </div>
      </div>
    </>
  );
};

export default NewsLettes;
