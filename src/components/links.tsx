import Link from "next/link";
import React from "react";
import Image from "next/image";

export const Links = () => {
  return (
    <div className="text-left uppercase text-white">
      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="grid-flow-row-dense gap-2">
          <Link href="/algorithms" className="hover:underline">
            <Image
              className="rounded-full border-2 border-slate-700 shadow-black grayscale filter hover:border-white hover:shadow-lg hover:filter-none"
              alt="dsa-image"
              src="/a.png"
              width={220}
              height={220}
            ></Image>
          </Link>
        </div>
        <div className="grid-flow-row-dense gap-2">
          <Link href="/hidden" className="hover:underline">
            <Image
              className="rounded-full border-2 border-slate-700 shadow-black grayscale filter hover:border-white hover:shadow-lg hover:filter-none"
              alt="title-me-image"
              src="/b.png"
              width={220}
              height={220}
            ></Image>
          </Link>
        </div>
        <div className="grid-flow-row-dense gap-2">
          <Link
            href="https://github.com/lefth-nd/gpt-parse"
            className="hover:underline"
          >
            <Image
              className="rounded-full border-2 border-slate-700 shadow-black grayscale filter hover:border-white hover:shadow-lg hover:filter-none"
              alt="gpt-parse-image"
              src="/c.png"
              width={220}
              height={220}
            ></Image>
          </Link>
        </div>
        <div className="grid-flow-row-dense gap-2">
          <Link href="/calculator" className="hover:underline">
            <Image
              className="rounded-full border-2 border-slate-700 shadow-black grayscale filter hover:border-white hover:shadow-lg hover:filter-none"
              alt="gpa-calc-image"
              src="/d.png"
              width={220}
              height={220}
            ></Image>
          </Link>
        </div>
        <div className="grid-flow-row-dense gap-2">
          <Link href="/bulletin" className="hover:underline">
            <Image
              className="rounded-full border-2 border-slate-700 shadow-black grayscale filter hover:border-white hover:shadow-lg hover:filter-none"
              alt="pass-replace"
              src="/e.png"
              width={220}
              height={220}
            ></Image>
          </Link>
        </div>
        <div className="grid-flow-row-dense gap-2">
          <Link href="/face" className="hover:underline">
            <Image
              className="rounded-full border-2 border-slate-700 shadow-black grayscale filter hover:border-white hover:shadow-lg hover:filter-none"
              alt="face-me"
              src="/f.png"
              width={220}
              height={220}
            ></Image>
          </Link>
        </div>
      </div>
    </div>
  );
};
