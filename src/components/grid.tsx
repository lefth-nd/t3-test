import React from "react";

type ButtonClickHandler = () => void;

interface GridProps {
  values: number[];
  handleSortButton: ButtonClickHandler;
  handleAddButton: ButtonClickHandler;
}

const Grid: React.FC<GridProps> = ({
  values,
  handleSortButton,
  handleAddButton,
}) => {
  const length = values.length;
  const btn =
    "m-3 rounded-full bg-white px-10 py-3 font-semibold text-gray-800 no-underline transition hover:bg-purple-400";
  const textareastyle =
    "resize-none rounded-md bg-slate-950 p-0 py-2 text-center text-white";
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
      <textarea
        id="selection-sort-array-value"
        className={textareastyle}
        placeholder="0"
      ></textarea>
      <div className="">
        <button className={btn} onClick={handleSortButton}>
          Sort
        </button>
        <button className={btn} onClick={handleAddButton}>
          Add to array
        </button>
      </div>
    </div>
  );
};

export default Grid;
