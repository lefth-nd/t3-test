/* eslint-disable @next/next/no-img-element */
import React from "react";
import { api } from "~/utils/api";
import Image from "next/image";
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
          Face Me!
          <div className="m-10 text-[1rem] font-normal tracking-wide ">
            here&apos;s a cool new discord pfp for you...
          </div>
          {b64png ? (
            <img
              className="m-auto rounded-full shadow-md shadow-slate-900"
              src={b64png}
              alt="Base64 PNG"
            />
          ) : (
            <div className="text-[2rem]">Loading...</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Face;
