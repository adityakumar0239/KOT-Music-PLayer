import React from "react";
import { AiFillApple } from "react-icons/ai";
import { IoPlaySharp } from "react-icons/io5";
import { recommand } from "../assets/data/data";
import { Card_sm } from "./Card_sm";

export const Sidebar = () => {
  return (
    <>
      <section className="sidebar hero flex flex-col justify-center gap-1 z-[-1]">
        <h1 className="mb-5 text-lg font-semibold text-gray-600">5 Likes</h1>
        {recommand.slice(0, 5).map((item, i) => (
          <div className="flex flex-col justify-center">
            <Card_sm cover={item.cover} name={item.name} tag={item.tag} i={i} />
          </div>
        ))}
       

        <div className="text-sm mt-3 flex justify-between align-center w-[100%]"><span>Aditya</span> <span className="text-gray-500 text-[12px]">© Copyright 2024</span></div>
        
      </section>
    </>
  );
};
