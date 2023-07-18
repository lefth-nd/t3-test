import { MouseEventHandler } from "react";
import { setCookie } from "~/server/middleware";
import { api } from "~/utils/api";

export default function Bulletinbar(props: { id: string | null; doc: string }) {
  const d = api.bulletin.getAll.useMutation();

  function Replace() {
    if (props.id !== null) {
      setCookie(props.id, "replaced");
    }
    const text = document.getElementById("user-message") as HTMLInputElement;
    d.mutate({ text: text.value });
    window.location.href = window.location.href;
  }

  function Pass() {
    if (props.id !== null) {
      setCookie(props.id, "passed");
    }
    window.location.href = window.location.href;
  }
  console.log(props.doc);

  return (
    <div id="input-container" className={props.doc}>
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
  );
}
