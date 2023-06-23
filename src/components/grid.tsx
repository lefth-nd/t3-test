import React from "react";

interface GridProps {
  values: number[];
}

const Grid: React.FC<GridProps> = ({ values }) => {
  const length = values.length;
  return (
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
  );
};

export default Grid;
