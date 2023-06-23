import React from "react";

interface GridProps {
  values: number[];
}

const Grid: React.FC<GridProps> = ({ values }) => {
  const length = values.length;
  return (
    <div className={`grid grid-cols-${length} grid-rows-1 gap-6`}>
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
