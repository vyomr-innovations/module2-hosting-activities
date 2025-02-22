import React from "react";
import { FaRegClock } from "react-icons/fa";
import { GiNightSleep } from "react-icons/gi";
import { LuBicepsFlexed } from "react-icons/lu";
import { GrGamepad } from "react-icons/gr";
import { FaMobileScreen } from "react-icons/fa6";




const Page = () => {
  return (
    <div className="min-h-screen  bg-gray-600 p-8 gap-4 flex justify-center  flex-col items-center ">
      <h3 className="text-lg font-bold text-center w-[600px]">
        “A champion doesn’t become a champion in the ring; he’s merely
        recognized in the ring. His ‘becoming’ happens during his daily
        routine.” - Joe Louis, boxer.
      </h3>
      <div className="flex flex-col gap-4 w-[700px] bg-gradient-to-t from-green-800 to-red-500 p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="text-2xl font-bold text-black">
            Build your daily schedule{" "}
          </h2>
          <p className="py-3 text-xl font-bold text-yellow-300 underline">
            {" "}
            Step 1:
          </p>
          <ul className="list-disc text-lg  font-bold text-white">
            <li>
              Separate your life into categories (health, study, sports, etc) -
              what needs to be changed. Write down goals for each category.
            </li>
            <li>
              Track everything you do in 15 mins intervals. Where are you
              wasting time? [Screen time? Phone time?]
            </li>
            <li>
              Pick 3 behaviours you need to change in order to reach your goal.{" "}
            </li>
          </ul>
        </div>

        <div>
          <p className="py-3 text-xl font-bold text-yellow-300 underline">
            {" "}
            Step 2:
          </p>
          <ul className="list-disc text-lg  font-bold text-white">
            <li>
              Brainstorm actions you can take to reach your goals, break them
              down into small steps.
            </li>
          </ul>
        </div>

        <div>
          <p className="py-3 text-xl font-bold text-yellow-300 underline">
            {" "}
            Step 3:
          </p>
          <ul className="list-disc text-lg  font-bold text-white">
            <li>
              Schedule your routine. Use the blocks of time you identified in
              Step1 for productive behaviours from Step 2!
            </li>
          </ul>
        </div>

        <div>
          <p className="py-3 text-xl font-bold text-green-400 underline">
            {" "}
            Tips:
          </p>
          <ul className="list-disc text-lg  font-bold text-white">
            <li>
              Set an alarm as reminders, to boost consistency. Do things at the
              same time every day. Whether it’s waking up, exercising, or
              dedicating time to any activity, a consistent schedule reinforces
              your routine’s power
            </li>
            <li>
              Keep required items handy. [For example, if you have a dedicated
              game practice time, keep everything you need - the
              equipment/gears/dress - handy, so that no time is lost in
              searching for this].
            </li>
            <li>Track your progress, reward yourself for achievements.</li>
          </ul>
        </div>
      </div>

      <div className=" flex flex-col gap-4 w-[700px] bg-gradient-to-t from-green-800 to-red-500 p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="text-lg py-3 font-bold ">
            <span className="text-yellow-400">Example: </span>Daily routines for
            becoming successful at the sport event.
          </h2>

          <div className="grid grid-cols-12 place-items-center">
            <div className="w-full font-bold text-center col-span-4 border-2 border-black px-5 py-2">
              Task
            </div>

            <div className="w-full font-bold text-center  col-span-4 border-2 border-black px-5 py-2">
              Duration
            </div>
            <div className="w-full font-bold text-center col-span-4 border-2 border-black px-5 py-2">
              Time
            </div>
          </div>

          <div className="grid grid-cols-12 place-items-center">
            <div className="w-full flex items-center gap-3 text-center col-span-4 border border-black px-5 py-2 min-w-[100px] min-h-[40px]">
              Sleep <GiNightSleep/>
            </div>

            <div className="w-full text-center  col-span-4 border border-black px-5 py-2 min-w-[100px] min-h-[40px]">
              10 hours 
            </div>

            <div className="w-full flex items-center gap-3 text-center col-span-4 border border-black px-5 py-2 min-w-[100px] min-h-[40px]" >
              9.00 pm - 7.00 am <FaRegClock/>
            </div>
          </div>
          <div className="grid grid-cols-12 place-items-center">
            <div className="w-full flex items-center gap-3 text-center  col-span-4 border border-black px-5 py-2 min-w-[100px] min-h-[40px]">
            Exercise <LuBicepsFlexed/>
            </div>

            <div className="w-full text-center  col-span-4 border border-black px-5 py-2 min-w-[100px] min-h-[40px]">
              1 hours 
            </div>

            <div className="w-full flex items-center gap-3 text-center  col-span-4 border border-black px-5 py-2 min-w-[100px] min-h-[40px]">
            3.00 - 4.00<FaRegClock/>
            </div>
          </div>
          <div className="grid grid-cols-12 place-items-center">
            <div className="w-full flex items-center gap-3 text-center  col-span-4 border border-black px-5 py-2">
            Game <GrGamepad/>
            </div>

            <div className="w-full text-center  col-span-4 border border-black px-5 py-2 min-w-[100px] min-h-[40px]">
              2 hours 
            </div>

            <div className="w-full flex items-center gap-3 text-center  col-span-4 border border-black px-5 py-2">
            4.00 - 6.00<FaRegClock/>
            </div>
          </div>

          <div className="grid grid-cols-12 place-items-center">
            <div className="w-full flex items-center gap-3 text-center  col-span-4 border border-black px-5 py-2 min-w-[100px] min-h-[40px]">
            practise
            </div>

            <div className="w-full text-center  col-span-4 border border-black px-5 py-2 min-w-[100px] min-h-[40px]">
               
            </div>

            <div className="w-full flex items-center gap-3 text-center  col-span-4 border border-black px-5 py-2 min-w-[100px] min-h-[40px]">
           
            </div>
          </div>

          <div className="grid grid-cols-12 place-items-center">
            <div className="w-full flex items-center gap-3 text-center  col-span-4 border border-black px-5 py-2 min-w-[100px] min-h-[40px]">
            Screen time <FaMobileScreen/>
            </div>

            <div className="w-full text-center  col-span-4 border border-black px-5 py-2 min-w-[100px] min-h-[40px]">
            30 min
            </div>

            <div className="w-full flex items-center gap-3 text-center  col-span-4 border border-black px-5 py-2 min-w-[100px] min-h-[40px]">
            6.30 - 7.00 <FaRegClock/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
