import Link from "next/link";
import React from "react";
import Navbar from "~/components/navbar";

export default function Next() {
  const main =
    "flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]";
  const btn =
    "rounded-full bg-white px-10 py-3 font-semibold text-gray-800 no-underline transition hover:bg-purple-400 text-black";
  return (
    <div className=" bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <Navbar />
      <div className="top-0"></div>
      <div className={main}>
        <div className="m-5 rounded-sm border-2 border-solid border-white p-32 text-center">
          <div id="mid-text" className="text-white">
            hi
          </div>
        </div>
        <button className={btn}>click me!</button>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]"></div>
      <div className="bg-slate-600 pb-3 pt-5 text-center text-white">
        <Link href="/">Back</Link>
      </div>
    </div>
  );
}
