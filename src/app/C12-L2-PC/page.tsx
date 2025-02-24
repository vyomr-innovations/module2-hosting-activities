import Image from "next/image";
import React from "react";

const data = [
  {
    step: "Step 1",
    img: "/image/color.png",
    text: " Start by picking seven color - one for each group of strenghts. The colors will help you see the biggest areas of strenghts. Color the individual strenghts as you talk or think about each group. Use the blank spaces on the last page to write in any more strenghts you think of. ",
  },
  {
    step: "Step 2",
    img: "/image/school-1555907_1280.png",
    text: "Cut out all the strenghts that apply. If more than one person is doing this craft, pick a set number of strenghts (to avoid making it a comprtition). Be sure to print a complete set of worksheets for each person in case they have many of the same strenghts.",
  },
  {
    step: "Step 3",
    img: "/image/tape.png",
    text: "Use tape to make a paper chain out of the individual strenghts. You can hang the chain on wall and keep adding to it as new strenghts develop. If more than one person is doing this craft, you can string all the chains together and talk about how we are stronger when we use everyones strenghts.",
  },
];

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-400 text-white flex justify-center flex-col items-center p-5">
      <h3 className="text-white font-bold text-4xl pb-[30px]">Chain of strength</h3>
        <div className="grid grid-cols-12 place-items-center">
      {data.map((item, index) => (
          <>
          <div key={index} className="col-span-4 flex items-center justify-center gap-3 p-5">
            <h3 className="text-xl text-yellow-100  font-bold ">{item.step}</h3>
            <Image
              src={item.img}
              className=""
              width={150}
              height={100}
              alt="image"
            />
          </div>
          <div className="col-span-8  p-5">
            <p className="font-bold text-lg">
             {item.text}


            </p>
          </div>
          </>
        ))}
        </div>


        <div className="flex w-full items-center justify-center gap-7 py-5 ">
          
          <div className="w-[300px] h-[200px] bg-red-400 relative rounded-lg overflow-hidden shadow-xl ">
            <Image src="/image/1.jpg" fill alt="image"/>
          </div> 
          <div className="w-[300px] h-[200px] bg-red-400 relative rounded-lg overflow-hidden shadow-xl">
            <Image src="/image/2.jpg" fill alt="image"/>
          </div> 
        </div>
    </div>
  );
};

export default Page;
