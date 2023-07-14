/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { api } from "~/utils/api";
import { middleware } from "~/server/middleware";

function Pass() {
  console.log("pass...");
}

export default function Bulletin() {
  const cookie = middleware();
  console.log(cookie);

  const d = api.bulletin.getAll.useMutation();

  function Replace() {
    const text = document.getElementById("user-message") as HTMLInputElement;
    d.mutate({ text: text.value });
    window.location.href = window.location.href;
  }

  const wisdom_data = api.bulletin.view.useQuery();
  const wisdom = wisdom_data.data?.contents as string;

  const currentTime = new Date();
  const currentUTCDays = currentTime.getUTCDay();
  const currentUTCHours = currentTime.getUTCHours();
  const currentUTCMins = currentTime.getUTCMinutes();
  const timeDays = wisdom_data.data?.updatedAt.getUTCDay() as number;
  const timeHours = wisdom_data.data?.updatedAt.getUTCHours() as number;
  const timeMins = wisdom_data.data?.updatedAt.getUTCMinutes() as number;
  const timeDifDays = currentUTCDays - timeDays;
  const timeDifHours = currentUTCHours - timeHours;
  const timeDifMins = currentUTCMins - timeMins;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#205bff] to-[#205baa] font-title text-white">
      <div className="m-5 text-[3rem] font-extrabold tracking-tight text-white">
        Pass or <span className="text-black">Replace?</span>
      </div>
      <div className=" m-5 text-center text-sm italic tracking-tight">
        Deface the current bulletin message with your own words of wisdom?
        <br /> Or see how long the current one can last?
        <br /> Your choice...
      </div>

      <div className="m-5">
        <span className="font-bold">Bulletin message last changed:</span>{" "}
        {timeDifDays} d {timeDifHours} hr {timeDifMins} mins ago
      </div>

      <div className="h-fit w-1/2 rounded-md border-2 border-solid border-white bg-black/10 text-white">
        <div className="m-12 text-justify text-xs md:text-lg">{wisdom}</div>
      </div>
      <div className="my-10 w-96 text-center">
        <input
          id="user-message"
          className="w-100% h-12 rounded-lg bg-slate-200 px-6 text-lg font-bold text-black shadow-inner shadow-slate-950"
          placeholder=""
          title="your message"
          maxLength={120}
        ></input>
        <button
          onClick={Pass}
          className="ml-4 mt-4 h-12 w-24 rounded-full bg-gray-200 font-bold uppercase text-black shadow-md transition-colors duration-100 hover:bg-slate-300"
        >
          pass
        </button>
        <button
          onClick={Replace}
          id="replace-button"
          className="ml-4 mt-4 h-12 w-24 rounded-full bg-slate-900 font-bold uppercase shadow-md transition-colors duration-100 hover:bg-slate-800"
        >
          replace
        </button>
      </div>
    </div>
  );
}
