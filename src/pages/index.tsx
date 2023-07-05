import Image from "next/image";
import { Links } from "~/components/links";
export default function MainMenu() {
  const main =
    "flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#15162c] to-[#000000]";
  const h1 =
    "text-5xl font-extrabold tracking-tight text-slate-100 sm:text-[5rem]";
  return (
    <main className={main}>
      <div className="h-1/2 w-1/2 rounded-md  border-b-2 border-stone-800   bg-stone-950 py-10">
        <div className="flex flex-row items-center border-b-2 border-b-stone-800 px-10 text-center">
          <div className="ml-10 text-left">
            <h1 className={h1}>Welcome to the Testing Grounds</h1>
            <h2 className="py-10 text-[1.5rem] tracking-tight text-slate-300">
              Experimental projects live here.
            </h2>
          </div>
          <Image
            className="rounded-md shadow-black "
            alt="avatar"
            src="/cropped-avatar.png"
            width={120}
            height={120}
          ></Image>
        </div>
        <Links />
      </div>
      <div className="absolute bottom-2 text-slate-500">
        Created by: Jay (lefth-nd)
      </div>
    </main>
  );
}
