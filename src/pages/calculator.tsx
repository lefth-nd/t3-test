import Link from "next/link";
import React, { useState } from "react";
import { Topic } from "~/components/topic";

function reset() {
  window.location.href = window.location.href;
}

export default function Calculator() {
  const [unit_values, setUnitValues] = useState<number[]>([]);
  const [grade_values, setGradeValues] = useState<number[]>([]);
  let gpa = "";

  function calculate() {
    let unit_value_sum = 0;
    let total = 0;
    let i = 0;
    grade_values.forEach((element) => {
      const uv = unit_values[i] as number;
      i += 1;
      total = total + element * uv;
    });

    unit_values.forEach((element) => {
      unit_value_sum = unit_value_sum + element;
    });

    let gpa_text: HTMLSpanElement | null = null;
    gpa = (total / unit_value_sum).toPrecision(2);
    if (typeof window !== "undefined") {
      gpa_text = document.getElementById("gpa");
    }
    if (gpa_text) gpa_text.innerHTML = " " + gpa;
  }

  //calculation grade_value[i] * unit_value[i] / sum of unit value
  return (
    <div className="absolute flex h-full w-full justify-center bg-blue-950 text-white">
      <div
        id="title"
        className="text-center text-[2rem] font-bold text-yellow-500 md:mt-60"
      >
        GPA Calculator
      </div>
      <div className="absolute top-1/3 w-full rounded-md bg-yellow-500 py-12 text-center text-slate-600 shadow-lg sm:left-1/3 sm:w-1/3">
        <div className="px-10 font-bold text-black">Calculate your GPA!</div>
        <div className="my-5"></div>
        <div className="px-10 text-black">
          High Distinction = 7; <br /> Distinction = 6; <br /> Credit = 5;{" "}
          <br /> Pass = 4; <br />
          Fail = 1.5; <br /> Withdraw Fail = 1.5
          <div className="ml-2 sm:ml-6">
            <Topic
              unit_values={unit_values}
              setUnitValues={setUnitValues}
              grade_values={grade_values}
              setGradeValues={setGradeValues}
            />
          </div>
        </div>
        <div className="mt-5">
          <div className="p-4">
            <button
              onClick={calculate}
              className="m-2 h-10 w-24 rounded-full bg-white shadow-md hover:bg-gray-200"
            >
              Calculate
            </button>
            <button
              onClick={reset}
              className="m-2 h-10 w-24 rounded-full bg-white shadow-md hover:bg-gray-200"
            >
              Reset
            </button>
          </div>
          <div className="my-5"></div>
        </div>
        <div className="font-bold">
          GPA:
          <span id="gpa" className="font-normal">
            0.0
          </span>
        </div>
      </div>
    </div>
  );
}
