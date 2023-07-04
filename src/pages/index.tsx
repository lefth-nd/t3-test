import Link from "next/link";
import Image from "next/image";
export default function MainMenu() {
  const main =
    "flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#15162c] to-[#000000]";
  const h1 = "text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]";
  return (
    <main className={main}>
      <div className=". flex flex-col items-center">
        <h1 className={h1}>Welcome</h1>
        <div className="p-8"></div>
        <div className=". space-y-8 text-white">
          <div className="grid-flow-row-dense items-center gap-2">
            <Image
              alt="dsa-image"
              src="/dsa-image.png"
              width={220}
              height={220}
            ></Image>
            <Link href="/algorithms" className="hover:underline">
              <div className="sm:text-[2rem]">
                Data Structures and Algorithms
              </div>
            </Link>
          </div>
          <div className="grid-flow-row-dense items-center gap-2">
            <Image
              alt="title-me-image"
              src="/title-me-image.png"
              width={120}
              height={120}
            ></Image>
            <Link href="/hidden" className="hover:underline">
              <div className="sm:text-[2rem]">Title Me Game</div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
