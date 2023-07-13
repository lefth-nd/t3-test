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
  const buttonStyle = "w-24 rounded-full bg-white shadow-md hover:bg-gray-200";
  function IncrementArray(value: number) {
    const gv = document.getElementById(`gv-${value}`) as HTMLInputElement;
    const uv = document.getElementById(`uv-${value}`) as HTMLInputElement;
    const gv_value = parseFloat(gv.value);
    console.log(gv_value);
    const uv_value = parseFloat(uv.value);

    if (gv_value === 0) {
      alert("Please select grade value.");
    } else {
      setTopics((prevTopic) => [...prevTopic, 0]);
      gv.setAttribute("disabled", "true");
      uv.setAttribute("disabled", "true");
      setGradeValues((pGV) => [...pGV, gv_value]);
      setUnitValues((pUV) => [...pUV, uv_value]);
      const button = document.getElementById(`button-${value}`);
      button?.setAttribute("style", "display: none");
    }
  }

  return (
    <div>
      {topics.map((_, index) => (
        <div
          key={index}
          id="input-container"
          className="mt-5 grid grid-flow-row grid-cols-3 gap-2"
        >
          <select
            id={`gv-${index}`}
            title="grade-value"
            placeholder="grade value"
            className="rounded-md text-center sm:w-20 lg:w-32"
            required
          >
            <option value={0}>grade value: </option>
            <option value={7}>HD</option>
            <option value={6}>D</option>
            <option value={5}>C</option>
            <option value={4}>P</option>
            <option value={1.5}>F</option>
            <option value={1.5}>WF</option>
          </select>
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
            id={`button-${index}`}
            onClick={() => void IncrementArray(index)}
            className={buttonStyle}
            type="button"
          >
            add topic
          </button>
        </div>
      ))}
    </div>
  );
};
