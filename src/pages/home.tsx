import Link from "next/link";
import React from "react";
import Navbar from "~/components/navbar";

export default function Next() {
  const main =
    "flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]";
  const btn =
    "rounded-full bg-white px-10 py-3 font-semibold text-gray-800 no-underline transition hover:bg-purple-400 text-black";
  const bg = "m-5 rounded-sm border-2 border-solid text-center h-40 w-40 ";
  return (
    <div className="bg-gradient-to-b from-[#206d02] to-[#15162c]">
      <Navbar />
      <div className="top-0"></div>
      <div className={main}>
        <div id="image-bg" className={bg}>
          <div id="mid-text" className="text-white"></div>
        </div>
        <button className={btn} onClick={() => void randomColor()}>
          click me!
        </button>
      </div>
      <div className="bg-slate-600 pb-3 pt-5 text-center text-white">
        <Link href="/">Back</Link>
      </div>
    </div>
  );
}

function randomColor() {
  const randomcolor = Math.floor(Math.random() * Math.pow(2, 24) - 1).toString(
    16
  );
  const className = document.getElementById("image-bg");
  const rc = "#" + randomcolor;
  className?.setAttribute("style", "background-color: " + rc);
}

/* FOR LATER
function randomNum() {
  const min = 10;
  const max = 1000;
  const val = Math.floor(Math.random() * (max - min + 1)) + min;
  return val;
}

async function fetchAvatar() {
  interface Image {
    url: string;
  }
  let url = "";

  try {
    const response = await fetch("");
    const json = (await response.json()) as Image[];
    const keys = Object.keys(json);
    const randomIdx = Math.floor(Math.random() * keys.length);
  } catch (error) {
    console.log(error);
  }
}
  */
