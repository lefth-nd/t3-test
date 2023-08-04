/* eslint-disable @next/next/no-img-element */
import React from "react";
import { api } from "~/utils/api";
import Image from "next/image";
import { useState, useEffect } from "react";

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
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#15162c] to-[#000000] text-center">
      <div className="text-[4rem] font-bold tracking-tight text-white">
        Face Me!
        <div className="m-10"></div>
        <div className="">
          {b64png ? (
            <img
              className="m-auto rounded-full shadow-lg"
              src={b64png}
              alt="Base64 PNG"
            />
          ) : (
            <div className="">Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Face;
