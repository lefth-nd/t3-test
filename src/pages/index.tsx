import Link from "next/link";
import Image from "next/image";
export default function MainMenu() {
  const main =
    "flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#15162c] to-[#000000]";
  const h1 =
    "text-5xl font-extrabold tracking-tight text-slate-100 sm:text-[5rem]";
  return (
    <main className={main}>
      <div className="h-1/2 w-1/2 rounded-md  border-2 border-indigo-900  bg-stone-950 py-10 ">
        <div className="mr-10 flex flex-row items-center text-center">
          <div className="ml-10 text-left">
            <h1 className={h1}>Welcome to the Testing Grounds</h1>
            <h2 className="pt-10 text-[1.5rem] tracking-tight text-slate-300">
              Experimental projects live here.
            </h2>
          </div>
          <div className="p-8"></div>
          <div className="mt-10 space-y-8 text-left uppercase text-white">
            <div className="grid-flow-row-dense gap-2">
              <Link href="/algorithms" className="hover:underline">
                <Image
                  className="rounded-full shadow-black grayscale filter hover:shadow-lg hover:filter-none"
                  alt="dsa-image"
                  src="/dsa-image.png"
                  width={220}
                  height={220}
                ></Image>
              </Link>
              <div className="py-2"></div>
            </div>
            <div className="grid-flow-row-dense  gap-2">
              <Link href="/hidden" className="hover:underline">
                <Image
                  className="rounded-full shadow-black grayscale filter hover:shadow-lg hover:filter-none"
                  alt="title-me-image"
                  src="/title-me-image.png"
                  width={120}
                  height={120}
                ></Image>
              </Link>
              <div className="py-2"></div>
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
                  width={120}
                  height={120}
                ></Image>
              </Link>
              <div className="py-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 text-slate-500">
        Created by: Jay (lefth-nd)
      </div>
    </main>
  );
}
