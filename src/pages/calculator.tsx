import React, { useRef, useState } from "react";
import { Topic } from "~/components/topic";
import Image from "next/image";
import Footer from "~/components/footer";

function reset() {
  window.location.href = window.location.href;
}

export default function Calculator() {
  const [unit_values, setUnitValues] = useState<number[]>([]);
  const [grade_values, setGradeValues] = useState<number[]>([]);
  const topic_number = grade_values.length;
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
  //bg-gradient-to-b from-[#15162c] to-[#000000]
  //calculation grade_value[i] * unit_value[i] / sum of unit value
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-950 to-[#0d1532] text-white">
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
        <div className="text-[2rem] font-bold text-black">
          Calculate your GPA!
        </div>
        <div className="text-medium mb-4 italic text-gray-700">
          GPA: Gyrating Positional Attributes
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
        <span className="text-black">Default unit value 4.5</span>
        <span className="text-black">
          Click add topic to confirm then calculate.
        </span>
        <div className="ml-10">
          <Topic
            unit_values={unit_values}
            setUnitValues={setUnitValues}
            grade_values={grade_values}
            setGradeValues={setGradeValues}
          />
        </div>
        <div className="mt-5">
          <div className="text-center text-black">
            Topics to calculate: {topic_number}
          </div>
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
        </div>
        <div className="text-2xl font-bold">
          GPA:
          <span id="gpa" className="font-normal">
            {" "}
            0.0
          </span>
        </div>
      </div>
      <div className="my-2"></div>
      <div className="max-w-sm text-white">
        Developer&apos;s note: topics must be added one by one.
      </div>
      <div className="my-2"></div>
      <div className="">Follow the github link to contribute.</div>
      <Footer />
    </main>
  );
}
