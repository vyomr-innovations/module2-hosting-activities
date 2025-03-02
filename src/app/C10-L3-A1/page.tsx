"use client";
import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
    const [isFirstScreen,setIsFirstScreen]=useState("start")
  const [dropData, setDropData] = useState<string[]>([]);
  const [taskData, setTaskData] = useState([
    { name: "Butterflies in the tummy" },
    { name: "Heart beats fast" },
    { name: "Weak or jelly legs" },
    { name: "Jittery teeth" },
    { name: "Clenched fists" },
    { name: "Headache" },
    { name: "Chest pain " },
    { name: "Sweaty palm" },
  ]);

  const handleDragStart = (e: React.DragEvent, task: string) => {
    // console.log(task)
    e.dataTransfer.setData("task", task);
  };

  const handleDrop = (e: React.DragEvent) => {
    const dropTask = e.dataTransfer.getData("task");
    setDropData((prev) => [...prev, dropTask]);
    setTaskData((prev) => prev.filter((item) => item.name !== dropTask));
  };


  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center gap-5 items-center flex-col p-5">

{
    isFirstScreen == "start" && (
        <>
          <div className="  shadow-black shadow-md min-w-[400px] text-center rounded-lg ">
            <h1 className="text-3xl text-black text p-8">Recognise Physical symptoms</h1>
          </div>
          <div className="border border-black rounded-lg px-8 py-1 shadow-inner shadow-[#000000b9] bg-yellow-400 hover:scale-90">
            <h3
              className="text-[30px]  cursor-pointer text-black"
              onClick={() => setIsFirstScreen("mainPage")}
            >
              Start
            </h3>
          </div>
        </>
    )
}

{
    isFirstScreen == "mainPage" && (
        <>
 <h3 className="text-black text-xl text-center">
        Getting constantly worried or anxious can cause physical symptoms. <br />Think
        about a time when you felt anxious. Select what physical symptoms you
        experience.
      </h3>
      <div className="border border-dotted w-[800px] border-black p-5 rounded-lg flex justify-center items-center flex-wrap gap-1">
        {taskData.map((item, index) => (
          <h3
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, item.name)}
            className="bg-yellow-400 text-center text-black px-5 py-2 rounded-lg border border-black cursor-grab active:cursor-grabbing"
          >
            {item.name}
          </h3>
        ))}
      </div>
      <div className="grid grid-cols-12 place-items-center gap-10">
        <div className="col-span-6 ">
          <Image
            src="/image/L3C10-activity1.jpeg"
            width={400}
            height={100}
            alt="image"
            className="rounded-lg"
          />
        </div>
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e)}
          className="col-span-6 w-full border border-black h-full rounded-lg flex justify-center items-center gap-1 flex-col"
        >
          {dropData.map((DropItem, index) => (
            <h3
              key={index}
              className="bg-yellow-400 text-black text-center font-bold px-5 py-2 rounded-lg border border-black min-w-[200px]"
            >
              {DropItem}
            </h3>
          ))}
        </div>
      </div> </>
    )
}
     
    </div>
  );
};

export default Page;
