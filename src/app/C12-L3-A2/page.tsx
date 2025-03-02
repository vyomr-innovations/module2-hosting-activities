"use client";
import React, { useState } from "react";

const Page = () => {
  const [dropData, setDropData] = useState<{ [key: number]: string[] }>({});
  const [dragData, setDragData] = useState([
    { text: "Someone accidentally bumps into you." },
    { text: "Someone is hurting me." },
    { text: "Someone is cheating in the game we’re playing." },
    { text: "I don’t have the supplies I need." },
    { text: "I didn’t get picked when my hand was up." },
    { text: "There’s someone trying to clog the toilet." },
    { text: "Two people are fighting on the playground." },
    { text: "My mom rolled her eyes at me." },
    { text: "My friend wants to play with someone else today." },
    { text: "Someone tells lies about you to make you feel bad." },
    { text: "My brother/sister took my supplies without asking me." },
    { text: "My parents did not let me watch my favourite show." },
  ]);
  const BoxData = [
    {
      bgColor: "#A0C878",
      name: "Small Problems",
    },
    {
      bgColor: "#3A7D44",
      name: "2",
    },
    {
      bgColor: "#FFCF50",
      name: "3",
    },
    {
      bgColor: "#DF6D14",
      name: "4",
    },
    {
      bgColor: "#E52020",
      name: "Big Problems",
    },
  ];

  const handleDrag = (e: React.DragEvent, task: string) => {
    e.dataTransfer.setData("task", task);
    // console.log(task)
  };

  const handleDrop = (e: React.DragEvent, index: number) => {
    const dropTask = e.dataTransfer.getData("task");
    // console.log(dropTask)
    setDropData((prev) => ({
      ...prev,
      [index]: prev[index] ? [...prev[index], dropTask] : [dropTask],
    }));
    setDragData((prev) => prev.filter((item) => item.text !== dropTask));
  };
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center flex-col p-5 items-center">
        <h3 className="text-3xl text-black py-4 h-[100px]">Small Problems OR Big Problems </h3>
      <div className="grid grid-cols-12  w-full place-items-center ">
        <div className="col-span-6  flex flex-col gap-1 h-[500px] overflow-y-scroll">
          {dragData.map((item, index) => (
            <h3
              key={index}
              draggable
              onDragStart={(e) => handleDrag(e, item.text)}
              className="text-black text-lg bg-blue-300 px-5 py-1 rounded-lg cursor-grab active:cursor-grabbing"
            >
              {item.text}
            </h3>
          ))}
        </div>
        <div className="col-span-6 w-full flex justify-center items-center gap-1  flex-col-reverse">
          {BoxData.map((item, index) => (
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, index)}
              style={{ backgroundColor: `${item.bgColor}` }}
              key={index}
              className="w-[500px] min-h-[100px]  border rounded-lg p-2"
            >
              <h3 className="text-center">{item.name}</h3>
              {dropData[index]?.map((dropI, dropIn) => (
                <div key={dropIn}>
                  <h3 className="bg-blue-500 p-2 rounded-lg my-1">{dropI}</h3>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
