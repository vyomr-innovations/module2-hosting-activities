
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen p-5 bg-[#F8FAFC] flex flex-col justify-center items-center">
    
      <div className=" rounded-lg overflow-hidden shadow-black shadow-md border border-black  ">
        <h4 className="text-black bg-white text-center text-3xl  py-3 shadow-[#0000007b] shadow-md">Six Word Story</h4>

        <div className="  flex gap-2 p-2 py-5 items-center justify-between min-w-[800px]">
          <div className="flex flex-col gap-1">
            {[
              "Island",
              "Jungle",
              "Map",
              "Mystery",
              "pirate",
              "Quest",
              "Ship",
              "Treasure",
            ].map((i, index) => (
              <h3
                key={index}
                className=" relative overflow-hidden after:bg-red-900 bg-orange-300 text-orange-700 text-2xl font-bold px-8 py-3 w-[180px] text-center shadow-[#0000009a] rounded-lg  shadow-inner"
              >
                {i}
              </h3>
            ))}
          </div>

          <div className="flex flex-col gap-1">
            {[
              "Bird",
              "Cat",
              "Dog",
              "Dragon",
              "Elephant",
              "Fish",
              "Tiger",
              "Unicorn",
            ].map((i, index) => (
              <h3
                key={index}
                className="  relative overflow-hidden after:bg-green-900 bg-green-300 text-green-800 text-2xl font-bold px-8 py-3 w-[180px] text-center shadow-[#0000009a] rounded-lg  shadow-inner"
              >
                {i}
              </h3>
            ))}
          </div>

          <div className="flex flex-col gap-1">
            {[
              "Castle",
              "Crown",
              "Fairy",
              "Kingdom",
              "Magic",
              "Portal",
              "Spell",
              "Wizard",
            ].map((i, index) => (
              <h3
                key={index}
                className="  relative overflow-hidden after:bg-blue-900 bg-blue-300 text-blue-800 text-2xl font-bold px-8 py-3 w-[180px] text-center shadow-[#0000009a] rounded-lg  shadow-inner"
              >
                {i}
              </h3>
            ))}
          </div>

          <div className="flex flex-col gap-1">
            {[
              "Birthday",
              "Book",
              "Dream",
              "Family",
              "Robot",
              "School",
              "Secret",
              "Surprise",
            ].map((i, index) => (
              <h3
                key={index}
                className=" relative overflow-hidden after:bg-violet-900 bg-violet-300 text-violet-800 text-2xl font-bold px-8 py-3 w-[180px] text-center shadow-[#0000009a] rounded-lg  shadow-inner"
              >
                {i}
              </h3>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
