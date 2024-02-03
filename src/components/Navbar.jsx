import React, { useState } from "react";
import { Sun, Moon } from "@phosphor-icons/react";
function Navbar(props) {
  return (
    <div
      className={`flex justify-between items-center ${
        props.isLight ? "" : "bg-black text-white"
      } transition-all ease-linear h-[10vh] border-none`}
    >
      <h1 className="text-red-500 text-4xl flex justify-center underline m-4">
        Counter
      </h1>
      {props.isLight ? (
        <Sun size={32} className="m-4 cursor-pointer" onClick={props.mode} />
      ) : (
        <Moon size={32} className="m-4 cursor-pointer" onClick={props.mode} />
      )}
    </div>
  );
}

export default Navbar;
