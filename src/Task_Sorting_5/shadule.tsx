"use client";
import React, { useState } from "react";
import shaduleData from "@/Task_Sorting_5/shadule.json";

const Shadule = () => {
  const [task, setTask] = useState(shaduleData);

  const handelTaskChage = (index: number, value: string) => {
    const copyShaduleTask = [...task];
    copyShaduleTask[index].tasks = value;
    setTask(copyShaduleTask);
  };
  const handleClockChange = (index: number, value: string) => {
    const copyShaduleTask = [...task];
    copyShaduleTask[index].clock = value;
    setTask(copyShaduleTask);
  };

  const addNewRow = () => {
    const newRow = { clock: "00:00", tasks: "" };
    setTask((prev) => [...prev, newRow]);
  };

  const handleOnBlur = () => {
    const sortingTime = [...task].sort((a, b) =>
      a.clock.localeCompare(b.clock)
    );
    setTask(sortingTime);
  };

  const handleDelet = (index: number) => {
    const filterTask = task.filter((_, indexfilter) => index != indexfilter);
    setTask(filterTask);
  };
  return (
    <div className="min-h-screen flex justify-start items-center flex-col p-5 gap-6 bg-[#F8FAFC] ">
      <h4 className="text-5xl py-5">Task List</h4>
      <div className="flex gap-5">
        <button
          onClick={addNewRow}
          className="text-white bg-green-500 py-2 px-3 rounded-lg "
        >
          Add Row
        </button>
      </div>
      <div>
        <div className="grid grid-cols-12 min-w-[800px] place-items-center gap-2 bg-red-500 py-2">
          <div className="col-span-3 text-white text-xl">Time</div>
          <div className="col-span-6 text-white text-xl">Task</div>
          <div className="col-span-3 text-white text-xl">Action</div>
        </div>
        {task.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-12 min-w-[800px] place-items-center py-3 gap-2  bg-yellow-200"
          >
            <div className="col-span-3 text-black text-xl">
              <input
                type="time"
                onBlur={handleOnBlur}
                value={item.clock}
                onChange={(e) => handleClockChange(index, e.target.value)}
                title="clock"
              />
            </div>
            <div className="col-span-6 text-black text-xl">
              <input
                type="text"
                className="min-w-[300px] p-2 rounded-lg "
                value={item.tasks}
                onChange={(e) => handelTaskChage(index, e.target.value)}
                title="text"
              />
            </div>
            <div className="col-span-3 text-black text-xl">
              <button
                onClick={() => handleDelet(index)}
                className="bg-red-400 text-center text-white px-3 py-1 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shadule;
