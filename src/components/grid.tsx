import React from "react";

type ButtonClickHandler = () => void;

interface GridProps {
  values: number[];
  handleButton: ButtonClickHandler;
}

const Grid: React.FC<GridProps> = ({ values, handleButton }) => {
  const length = values.length;
  const btn =
    "rounded-full bg-white px-10 py-3 font-semibold text-gray-800 no-underline transition hover:bg-purple-400";
  return (
    <div className="flex-grow items-center justify-center text-center">
      <div
        className={`grid`}
        style={{ gridTemplateColumns: `repeat(${length}, 1fr)` }}
      >
        {values.map((value, index) => (
          <div
            key={index}
            className="border-2 border-solid border-white p-10 text-white"
          >
            {value}
          </div>
        ))}
      </div>
      <div className="pt-10"></div>
      <button className={btn} onClick={handleButton}>
        Sort
      </button>
    </div>
  );
};

export default Grid;
