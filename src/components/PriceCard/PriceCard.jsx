import React from 'react';

const PriceCard = ({category,price,cardpara,textColor,cardcolor,btncolor,priceColor}) => {
  return (
    <>
    <div className=" flex items-center justify-center bg-white">
      <div className={`bg-blue-500  min-w-[350px]  border border-[#ffe492] ${cardcolor} p-6 py-20 rounded-lg shadow-sm max-w-sm mx-auto `}>
      <h2 className={`text-3xl font-bold t text-${textColor}`}>{category}</h2>
      <h1 className={`text-4xl font-bold  mb-4 ${priceColor}`}>${price}</h1>
      <p className={` text-lg mb-4 text-${textColor}`}>{cardpara}</p>
      <ul className={` space-y-2 text-${textColor}`}>
        <li className="flex text-lg items-center">
          <span className={`  w-2 h-2 bg-${textColor} rounded-full mr-2`}></span>
          Sync unlimited devices
        </li>
        <li className="flex text-md items-center">
          <span className={`w-2 h-2 bg-${textColor} rounded-full mr-2`}></span>
          10 GB monthly uploads
        </li>
        <li className="flex text-md items-center">
          <span className={`w-2 h-2 bg-${textColor} rounded-full mr-2`}></span>
          200 MB max. note size
        </li>
        <li className="flex text-md items-center">
          <span className={`w-2 h-2 bg-${textColor} rounded-full mr-2`}></span>
          Customize Home dashboard and access extra widgets
        </li>
        <li className="flex text-md items-center">
          <span className={`w-2 h-2 bg-${textColor} rounded-full mr-2`}></span>
          Connect primary Google Calendar account
        </li>
        <li className="flex text-md items-center">
          <span className={`w-2 h-2 bg-${textColor} rounded-full mr-2`}></span>
          Add due dates, reminders, and notifications to your tasks
        </li>
      </ul>
      <button className={`mt-6 w-auto p-10 py-4 bg-${btncolor} border border-[#F5C563] text-${textColor} py-2 rounded-lg`}>
        Get Started
      </button>
    </div>
    </div>
    </>
  );
};

export default PriceCard;