"use client";
import Quadrants from "@/Task_Sorting_5/quadrants";
import Tasks from "@/Task_Sorting_5/task";
import React, { useState } from "react";
import Confetti from "react-confetti";
import taskData from "@/Task_Sorting_5/taskData.json";
import Shadule from "./shadule";

const TaskSorting5 = () => {
  const [isFirstScreen,setIsFirstScreen]=useState("sortingScreen")
  const [open, setOpen] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [confetti, setCofetti] = useState(false);
  const [massege, setMassege] = useState("");
  const [availbleTask,setAvailbleTask]= useState(taskData)
  const handleCheck = () => {
    //  setIsCorrect(isCorrect)
    if (isCorrect) {
      setMassege("Great job! All tasks are sorted correctly!");
      setCofetti(true);
      setOpen(true);
    } else {
      setMassege(
        "Oops! Some tasks are in the wrong box. Try again by dragging the tasks to the correct box."
      );
    }
  };
  return (
    <>
{
  isFirstScreen === "sortingScreen" &&  <div className=" min-h-screen w-full bg-[#F8FAFC] flex flex-col justify-center items-center py-3">
    <div className="my-5  w-full flex flex-col gap-4 justify-center items-center text-black">
      <h1 className="text-3xl">Task Sorting Puzzle</h1>
      <button
        className="bg-green-500 rounded px-8 py-2 text-black"
        onClick={handleCheck}
      >
        Check Result
      </button>
      <p className={`${isCorrect ? "text-green-400" : "text-red-400"}`}>
        {massege}
      </p>
    </div>
    <div className=" grid grid-cols-12 place-items-center  w-full px-8">
      <div className="col-span-3 w-full">
        <Tasks availbleTask={availbleTask} />
      </div>
      <div className="col-span-9 ">
        <Quadrants setIsCorrect={setIsCorrect} setOpen={setOpen} setIsFirstScreen={setIsFirstScreen} availbleTask={availbleTask} setAvailbleTask={setAvailbleTask} open={open} />
      </div>
    </div>
    {confetti ? <Confetti className="w-full h-screen" /> : ""}
  </div>
}

{isFirstScreen === "ShaduleScreen" && <Shadule/> }
    </>
    
    
  );
};

export default TaskSorting5;
