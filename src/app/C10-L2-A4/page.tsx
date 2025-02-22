import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-600 flex justify-center flex-col items-center">
      <h3 className="text-2xl text-white font-bold ">Balloon breathing</h3>
      <div className="grid grid-cols-12 place-items-center">
        <div className="col-span-6">
          <Image src="/image/C10-L2-A4.jpg" className="rounded-lg shadow-lg" width={400} height={400} alt="image" />
        </div>
        <div className="col-span-6 p-5">
          <p className="list-decimal text-lg font-bold">
            Place hands around your mouth as if you are about to blow a balloon.
          </p>
          <p className="list-decimal text-lg font-bold">
            Take a deep breath through your nose.
          </p>
          <p className="list-decimal text-lg font-bold">
            Slowly exhale through your mouth, and stat to spread your hands out
            as if you are blowing up a great deal of balloon.
          </p>
          <p className="list-decimal text-lg font-bold">
            How you hand position as you inhale again and then spread your hands
            further as you exhale.
          </p>

          <h2 className="text-2xl font-bold ">Repeat 5 times.</h2>
          <p className="list-decimal text-lg font-bold">
            Gently sway from side to side as you release ballon up into the sky.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
