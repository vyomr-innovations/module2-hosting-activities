import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-600 flex justify-center flex-col items-center">
      <h3 className="text-2xl text-white font-bold"> Snake Breathing</h3>
      <div className="grid grid-cols-12 place-items-center">
        <div className="col-span-6">
          <Image src="/image/C10-L3-A3.jpg" width={400} height={400} alt="image" />
        </div>
        <div className="col-span-6 p-5 flex flex-col gap-4">
          <p className="list-decimal text-lg font-bold">
         <span className="text-xl underline"> Step 1:</span> Close your eyes and deep breathe through your nose.</p> 
         <p className="list-decimal text-lg font-bold">
         Feel your stomach rise as it gets filled with air.</p> 

         
         <p className="list-decimal text-lg font-bold">
         <span className="text-xl underline"> Step 2:</span> Breath out while saying the letters ‘ssss’</p>

         <p className="list-decimal text-lg font-bold">
         <span className="text-xl underline"> Step 3:</span> Continue making this ‘s’ sound. Feel your stomach clench as all the air is released. </p>

         <p className="list-decimal text-lg font-bold">
         Repeat steps 1 to 3 5 to 10 times.</p>

        </div>
      </div>
    </div>
  );
};

export default Page;
