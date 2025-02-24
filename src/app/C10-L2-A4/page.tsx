import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-400 text-white flex justify-center flex-col items-center">
      <h3 className="text-3xl text-white font-bold pb-[60px]">Balloon breathing</h3>
      <div className="grid grid-cols-12 place-items-center">
        <div className="col-span-6">
          <Image src="/image/C10-L2-A4.jpg" className="rounded-lg shadow-lg" width={400} height={400} alt="image" />
        </div>
        <div className="col-span-6 p-4">
          <ul className=" space-y-2 text-xl">
          <li className=" font-bold py-1">
           <span className="text-xl "> Step 1: </span>  Place hands around your mouth as if you are about to blow a balloon.
          </li>
          <li className="font-bold py-1">
          <span className="text-xl "> Step 2: </span>  
          Take a deep breath through your nose. </li>
          <li className=" font-bold py-1 ">
          <span className="text-xl "> Step 3: </span>  
          Slowly exhale through your mouth, and start to spread your hands out as if you are blowing up a great deal of balloon.
          </li>
          <li className=" font-bold py-1">
          <span className="text-xl "> Step 4: </span>  
          Hold your  hand in position as you inhale again and then spread your hands further as you exhale.

          </li>

          <h2 className="text-3xl font-bold ">Repeat 5 times.</h2>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
