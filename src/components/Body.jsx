import React from 'react';
import myImage from '../images/cod.jpg';

const Body = () => {
  return (
    <div className="flex items-start">
      <img src={myImage} alt="Tournament Banner" width="45%" height="auto" className="rounded-xl p-10 pr-5" />
      <div className="flex flex-col justify-center">
        <h1 className="inline-block text-4xl font-bold text-white pt-10 pl-5">Call of Duty Tournament</h1>
        <button className="bg-pink-500 hover:bg-pink-700 text-white font py-2 px-2 mt-4 w-20px rounded-md">View Rules & Description</button>
      </div>
    </div>
  )
}

export default Body;