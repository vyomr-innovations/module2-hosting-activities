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
          <ul className="list-decimal">
          <li className=" text-lg font-bold py-1">
            Place hands around your mouth as if you are about to blow a balloon.
          </li>
          <li className="text-lg font-bold py-1">
            Take a deep breath through your nose.
          </li>
          <li className="text-lg font-bold py-1 ">
            Slowly exhale through your mouth, and stat  to spread your hands out
            as if you are blowing up a great deal of balloon.
          </li>
          <li className="text-lg font-bold py-1">
            How you hand position as you inhale again and then spread your hands
            further as you exhale.
          </li>

          <h2 className="text-2xl font-bold ">Repeat 5 times.</h2>
          <li className="text-lg font-bold py-1">
            Gently sway from side to side as you release ballon up into the sky.
          </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
