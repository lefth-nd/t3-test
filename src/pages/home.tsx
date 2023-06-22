/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Navbar from "~/components/navbar";

export default function Next() {
  const main =
    "flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]";
  const btn =
    "rounded-full bg-white px-10 py-3 font-semibold text-gray-800 no-underline transition hover:bg-purple-400 text-black";
  const urlPath =
    "https://github.com/lefth-nd/dbsb/raw/main/data/test14021.png";
  return (
    <div className=" bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <Navbar />
      <div className="top-0"></div>
      <div className={main}>
        <div className="m-5 rounded-sm border-2 border-solid border-white p-32 text-center">
          <div id="mid-text" className="text-white"></div>
          <img
            id="image-pfp"
            alt="pfp"
            src={urlPath}
            width="120"
            height="120"
          />
        </div>
        <button className={btn} onClick={() => void fetchAvatar()}>
          click me!
        </button>
      </div>
      <div className="bg-slate-600 pb-3 pt-5 text-center text-white">
        <Link href="/">Back</Link>
      </div>
    </div>
  );
}

function randomNum() {
  const min = 10;
  const max = 1000;
  const val = Math.floor(Math.random() * (max - min + 1)) + min;
  return val;
}

async function fetchAvatar() {
  let url = "";

  try {
    const response = await fetch("https://this-person-does-not-exist.com/en");
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const avatar = doc.getElementById("avatar");

    if (avatar instanceof HTMLImageElement) {
      url = avatar.src;
    }
    const urlToChange = document.getElementById("image-pfp");
    urlToChange?.setAttribute("src", url);
  } catch (error) {
    console.log(error);
  }
}
