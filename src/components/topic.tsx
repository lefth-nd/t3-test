import React from "react";
import { useState } from "react";

interface OtherComponentProps {
  unit_values: number[];
  setUnitValues: React.Dispatch<React.SetStateAction<number[]>>;
  grade_values: number[];
  setGradeValues: React.Dispatch<React.SetStateAction<number[]>>;
}

export function val() {
  console.log("hi");
}

export const Topic: React.FC<OtherComponentProps> = ({
  setUnitValues,
  setGradeValues,
}) => {
  const [topics, setTopics] = useState<number[]>([0]);
  function IncrementArray(value: number) {
    setTopics((prevTopic) => [...prevTopic, 0]);
    const gv = document.getElementById(`gv-${value}`) as HTMLInputElement;
    const uv = document.getElementById(`uv-${value}`) as HTMLInputElement;
    const gv_value = parseFloat(gv.value);
    const uv_value = parseFloat(uv.value);
    setGradeValues((pGV) => [...pGV, gv_value]);
    setUnitValues((pUV) => [...pUV, uv_value]);
  }

  return (
    <div>
      {topics.map((_, index) => (
        <div
          key={index}
          id="input-container"
          className="mt-5 grid grid-flow-row grid-cols-3 gap-2"
        >
          <input
            id={`gv-${index}`}
            title="grade-value"
            type="number"
            placeholder="grade value"
            className="rounded-md text-center sm:w-20 lg:w-32"
            required
          ></input>
          <input
            id={`uv-${index}`}
            title="unit-value"
            type="number"
            placeholder="unit value"
            className="rounded-md text-center sm:w-20 lg:w-32"
            required
            defaultValue={4.5}
          ></input>
          <button
            onClick={() => void IncrementArray(index)}
            className="w-24 rounded-full bg-white shadow-md hover:bg-gray-200"
          >
            add topic
          </button>
        </div>
      ))}
    </div>
  );
};
