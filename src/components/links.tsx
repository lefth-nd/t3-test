import Link from "next/link";
import React from "react";
import Image from "next/image";

export const Links = () => {
  return (
    <div className="text-left uppercase text-white">
      <div className="grid scale-75 grid-flow-col items-center gap-4">
        <div className="grid-flow-row-dense gap-2">
          <Link href="/algorithms" className="hover:underline">
            <Image
              className="rounded-full  shadow-black grayscale filter hover:shadow-lg hover:filter-none"
              alt="dsa-image"
              src="/dsa-image.png"
              width={320}
              height={320}
            ></Image>
          </Link>
        </div>
        <div className=""></div>
        <div className="grid-flow-row-dense  gap-2">
          <Link href="/hidden" className="hover:underline">
            <Image
              className="rounded-2xl shadow-black grayscale filter hover:shadow-lg hover:filter-none"
              alt="title-me-image"
              src="/title-me-image.png"
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
              className="rounded-full shadow-black grayscale filter hover:shadow-lg hover:filter-none"
              alt="gpt-parse-image"
              src="/gptp.png"
              width={220}
              height={220}
            ></Image>
          </Link>
        </div>
        <div className="grid-flow-row-dense gap-2">
          <Link href="/calculator" className="hover:underline">
            <Image
              className="rounded-full shadow-black grayscale filter hover:shadow-lg hover:filter-none"
              alt="gpa-calc-image"
              src="/logo.png"
              width={220}
              height={220}
            ></Image>
          </Link>
        </div>
      </div>
    </div>
  );
};
