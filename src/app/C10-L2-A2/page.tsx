"use client";
import React, { useState } from "react";

const Page = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("mainPage");
  const [dropData, setDropData] = useState<{ [key: number]: string[] }>({});
  const [taskData, setTaskData] = useState([
    { name: "sing" },
    { name: "others will laugh or think she is a bad singer" },
    { name: "her fear" },
    { name: "Camilla" },
    { name: "sing with eyes closed" },
    { name: "face fear and practise" },
    { name: "sing in front of others" },
  ]);

  const QustionsData =[
   
    {
        name: "Name of the character",
        val:"Camilla"
    }, 
    {
        name: "Loves to",
        val:"sing"
    },
     {
        name: "Is afraid of",
        val:"sing in front of others"
    },
     {
        name: "Worries that",
        val:"others will laugh or think she is a bad singer"
    },{
        name: "Avoids",
        val:"her fear"
    },
    {
        name: "Overcomes fear by",
        val:"sing with eyes closed"
    },{
        name: "We learn to instead of avoiding",
        val:"face fear and practise"
    }
  ]

  const handleDragStart = (e: React.DragEvent, task: string) => {
    // console.log(task)
    e.dataTransfer.setData("task", task);
  };

  const handleDrop = (e: React.DragEvent, index: number ,name:string) => {
    const dropTask = e.dataTransfer.getData("task");

 
if(name === dropTask){
    setDropData((prev) => ({
        ...prev,
        [index]: prev[index] ? [...prev[index], dropTask] : [dropTask],
      }));
      setTaskData((prev) => prev.filter((item) => item.name !== dropTask));
}
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center gap-5 items-center flex-col p-10">
      {isFirstScreen == "start" && (
        <>
          <div className="  shadow-black shadow-md min-w-[400px] text-center rounded-lg ">
            <h1 className="text-3xl text-black text p-8">
            character wheel
            </h1>
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
      )}

      {isFirstScreen == "mainPage" && (
        <>
          <h3 className="text-black text-3xl text-center">
          character wheel
      </h3>
      <audio src="/audios/storyAudio.wav" controls className="invert"/>
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
          <div className="grid grid-cols-12 place-items-center gap-10 w-full">
            <div className="col-span-12 w-[600px] ">
              <ul className="space-y-5  ">
                {QustionsData.map((i, ind) => (
                  <li
                    key={ind}
                    className="text-xl text-black flex items-center justify-between gap-6 "
                  >
                    {i.name}

                    <span
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => handleDrop(e, ind ,i.val) }
                      className=" min-h-[20px] border-b-2  border-black text-black text-center font-bold px-5 py-2 min-w-[200px]"
                    >
                      {dropData[ind]?.map((dropItem, DropIndex) => (
                        <h3 key={DropIndex}>{dropItem}</h3>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
