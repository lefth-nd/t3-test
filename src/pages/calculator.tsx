import React, { useState } from "react";
import { Topic } from "~/components/topic";
import Image from "next/image";

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
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-950 text-white">
      <div className="grid grid-flow-col-dense items-end">
        <Image width={60} height={60} src="/logo.png" alt="logo"></Image>
        <div
          id="title"
          className="text-center text-[3rem] font-extrabold tracking-tight text-yellow-500 md:mt-60"
        >
          GPA Calculator
        </div>
      </div>
      <div className="flex flex-col items-center rounded-md bg-yellow-500 py-6 text-slate-600 shadow-lg sm:left-1/3 sm:w-1/3 md:left-1/4 md:w-1/2">
        <div className="mb-6 text-[2rem] font-bold text-black">
          Calculate your GPA!
        </div>
        <div className="grid grid-cols-2 gap-4 px-10 text-black">
          <span className="font-bold">High Distinction</span> 7
          <span className="font-bold">Distinction</span> 6
          <span className="font-bold">Credit</span> 5
          <span className="font-bold">Pass</span> 4
          <span className="font-bold">Fail</span> 1.5
          <span className="font-bold">Withdraw Fail</span> 1.5
          <div className="ml-2 sm:ml-6"></div>
        </div>
        <span className="">Default unit value 4.5</span>
        <div className="ml-10">
          <Topic
            unit_values={unit_values}
            setUnitValues={setUnitValues}
            grade_values={grade_values}
            setGradeValues={setGradeValues}
          />
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
    </main>
  );
}
