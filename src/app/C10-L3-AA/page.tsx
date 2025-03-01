import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-black flex justify-center flex-col items-center">
      <h3 className="text-3xl  font-bold pb-[60px] ">Turtle technique</h3>
      <div className="grid grid-cols-12 place-items-center">
        <div className="col-span-6">
          <Image src="/image/Turtle_technique.jpg" width={500} height={400} className="rounded-lg shadow-xl" alt="image" />
        </div>
        <div className="col-span-6 p-5 flex flex-col gap-4 w-full">
          <p className="list-decimal text-xl font-bold">
         <span className="text-xl ">Step 1 Recognize Your Feelings:</span> Identify what you  are feeling- anger, sadness, or frustration.</p> 
        
         
         <p className="list-decimal text-xl font-bold">
         <span className="text-xl">Step 2 Stop Your Body:</span> Stop your actions and movements when you feel overwhelmed.</p>

         <p className="list-decimal text-xl font-bold">
         <span className="text-xl ">Step 3 {`"Tuck In" and Take Deep Breaths:`}</span> {`Pretend to go into a "shell" (like a turtle) and take three deep breaths to calm down.`}
         </p>

         <p className="list-decimal text-xl font-bold">
         <span className="text-xl ">Step 4: Come Out and Think of Solutions:</span>{`Once calm, come out of the "shell" and think of ways to solve the problem or manage your emotions.`}
         </p>

         {/* <p className="list-decimal text-xl font-bold">
         Repeat the above steps 5 to 10 times</p> */}

        </div>
      </div>
    </div>
  );
};

export default Page;
