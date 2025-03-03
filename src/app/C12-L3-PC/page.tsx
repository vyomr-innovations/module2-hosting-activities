"use client";
import React, { useState } from "react";

const Page = () => {
  const [dropData, setDropData] = useState<{ [key: number]: string[] }>({});
  const [input, setInput] = useState<string>("");

  const BoxData = [
      { id: 1, bgColor: "#A0C878", name: "Small Problems (1)" },
      { id: 2, bgColor: "#3A7D44", name: "2" },
      { id: 3, bgColor: "#FFCF50", name: "3" },
      { id: 4, bgColor: "#DF6D14", name: "4" },
      { id: 5, bgColor: "#E52020", name: "Big Problems (5)" },
  ];

  const handle5 = (index:number) => {
setDropData((prev)=>({
    ...prev,
    [index] : prev[index] ? [...prev[index],input] : [input]
}))
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center flex-col p-5 items-center">
      <h3 className="text-3xl text-black py-4 h-[100px]">
        Big Deal or Small Deal
      </h3>
      <div className="grid grid-cols-12  w-full place-items-center ">
        <div className="col-span-6  flex flex-col gap-5 w-full ">
          <textarea
            title="text"
            className="min-h-[50px] p-3 rounded-lg border border-black text-black"
            placeholder="Enter Problems"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <button
              onClick={()=>handle5(4)}
              className="min-w-[120px] border px-5 p-2 rounded-lg bg-[#E52020]"
            >
              Big Problems (5)
            </button>
            <button
             onClick={()=>handle5(3)}
             className="min-w-[120px] border px-5 p-2 rounded-lg bg-[#DF6D14]">
              4
            </button>
            <button
             onClick={()=>handle5(2)}
            className="min-w-[120px] border px-5 p-2 rounded-lg bg-[#FFCF50]">
              3
            </button>
            <button
             onClick={()=>handle5(1)}
            className="min-w-[120px] border px-5 p-2 rounded-lg bg-[#3A7D44]">
              2
            </button>
            <button 
             onClick={()=>handle5(0)}
            className="min-w-[120px] border px-5 p-2 rounded-lg bg-[#A0C878]">
              Small Problems (1)
            </button>
          </div>
        </div>
        <div className="col-span-6 w-full flex justify-center items-center gap-1  flex-col-reverse">
          {BoxData.map((item, index) => (
            <div
              style={{ backgroundColor: `${item.bgColor}` }}
              key={index}
              className="w-[500px] min-h-[100px]  border rounded-lg p-2"
            >
              <h3 className="text-center">{item.name}</h3>
              {dropData[index]?.map((dropI, dropIn) => (
                <div key={dropIn}>
                  <h3 className="bg-blue-300 text-black text-center p-2 rounded-lg my-1">{dropI}</h3>
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
