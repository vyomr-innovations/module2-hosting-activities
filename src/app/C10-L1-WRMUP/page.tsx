"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("start");

  useEffect(() => {
    const audios = document.querySelectorAll("audio");

    audios.forEach((audio) => {
      audio.addEventListener("play", () => {
        audios.forEach((el) => {
          if (el !== audio) {
            el.pause();
          }
        });
      });
    });

    return () => {
      audios.forEach((audio) => {
        audio.removeEventListener("play", () => {});
      });
    };
  }, []);


  
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col gap-10 justify-center items-center">
      {isFirstScreen === "start" && (
        <>
          <div className="  shadow-black shadow-md min-w-[400px] text-center rounded-lg ">
            <h1 className="text-3xl text-black text p-8">Freeze dance</h1>
          </div>
          <div className="border border-black rounded-lg px-8 py-1 shadow-inner shadow-[#000000b9] bg-yellow-400 hover:scale-90">
            <h3
              className="text-[30px]  cursor-pointer text-black"
              onClick={() => setIsFirstScreen("audio")}
            >
              Start
            </h3>
          </div>
        </>
      )}

      {isFirstScreen === "audio" && (
        <div className="flex flex-col justify-center items-center gap-8">
          {[
            { title: "Determination", src: "/audios/Determination.mp3" },
            {
              title: "Dancing with Stars",
              src: "/audios/Dancing_with_Stars.mp3",
            },
            { title: "Minecraft", src: "/audios/minecraft.mp3" },
          ].map((audio, index) => (
            <div key={index}>
              <h3 className="text-black text-center text-lg py-2">
                {audio.title}
              </h3>
              <audio src={audio.src} controls className="invert"></audio>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
