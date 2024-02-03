import React from "react";
import { useState } from "react";

function Maincontainer(props) {
  const [count, setCount] = useState(0);
  const decreaseCount = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div className={`transition-all ease-linear ${props.isLight ? "" : "bg-black text-white"} `}>
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <p className="m-4 ">
          <span className="text-6xl">{count}</span>
        </p>
        <div>
          <button
            type="button"
            onClick={decreaseCount}
            className="border-black border-2 shadow-md shadow-gray-900/90 hover:scale-110 transition-all ease-in-out duration-150 bg-blue-700 text-white p-2 rounded-md m-2"
          >
            Decrease
          </button>
          <button
            type="button"
            onClick={resetCount}
            className="border-black border-2 shadow-md shadow-gray-900/90 hover:scale-110 transition-all ease-in-out duration-150 bg-blue-700 text-white p-2 rounded-md m-2"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={increaseCount}
            className="border-black border-2 shadow-md shadow-gray-900/90 hover:scale-110 transition-all ease-in-out duration-150 bg-blue-700 text-white p-2 rounded-md m-2"
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
}

export default Maincontainer;
