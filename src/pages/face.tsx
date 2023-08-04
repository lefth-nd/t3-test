/* eslint-disable @next/next/no-img-element */
import React from "react";
import { api } from "~/utils/api";
import { useState, useEffect } from "react";
import Footer from "~/components/footer";

const Face = () => {
  const [b64png, setPng] = useState("");
  let newb64png = "";
  if (typeof window !== "undefined") {
    document.getElementById("face");
    const d = api.facegen.generateFace.useQuery();
    if (typeof d.data !== "undefined") newb64png = d.data;
  }

  useEffect(() => {
    setPng(newb64png);
    console.log(newb64png);
  }, [newb64png]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#252525] to-[#000000] text-center">
      <div className="rounded-lg  bg-lime-900 p-20">
        <div className="text-[4rem] font-bold tracking-tight text-lime-100">
          Face <span className="text-lime-400">Me!</span>
          <div className="m-10 text-[1rem] font-normal tracking-wide">
            here&apos;s a cool new discord pfp for you...
          </div>
          <div className="">
            <div className="h-20 rounded-t-2xl bg-lime-300"></div>
            <div className="absolute">
              {b64png ? (
                <img
                  className="relative bottom-12 ml-5 overflow-hidden rounded-full border-8 border-zinc-800"
                  src={b64png}
                  alt="Base64 PNG"
                />
              ) : (
                <div className="text-[2rem]">Loading...</div>
              )}
              <div className="relative -top-20 left-[114px] h-6 w-6 rounded-full border-4 border-zinc-900 bg-green-500"></div>
            </div>
            <div className="h-60 rounded-b-2xl bg-zinc-800 text-zinc-800">
              Secret
              <div className="mx-4 h-32 rounded-lg bg-zinc-900">
                <div className="mx-6 py-4 text-left text-[1.1rem] font-semibold tracking-normal text-white">
                  U...
                </div>
                <div className="mx-6 grid grid-flow-col gap-8 border-b-[1px] border-gray-400">
                  <div className="border-b-2 border-white pb-4 text-left text-[0.90rem] font-medium tracking-normal text-white">
                    User Info
                  </div>
                  <div className="text-left text-[0.90rem] font-medium tracking-normal text-gray-400">
                    Mutual Servers
                  </div>
                  <div className="text-left text-[0.90rem] font-medium tracking-normal text-gray-400">
                    Mutual Friends
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Face;
