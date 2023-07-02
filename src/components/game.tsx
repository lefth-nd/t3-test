import React from "react";
import { api } from "~/utils/api";

function getComment(): string {
  const { data } = api.youtube.comment.useQuery();
  let comment = "";
  if (data?.items !== undefined) {
    comment = data?.items[0]?.snippet?.topLevelComment?.snippet
      ?.textDisplay as string;
  }
  return comment;
}

export const Game = () => {
  const btn =
    "rounded-full bg-white px-10 py-3 font-semibold text-gray-800 no-underline transition hover:bg-red-900 hover:text-white";
  return (
    <div className="w-3/4 text-center">
      <div className=". h-32items-center flex rounded-3xl bg-slate-200 p-8 align-middle font-bold shadow-lg shadow-zinc-950">
        {getComment()}
      </div>
      <div className="p-6"></div>
      <div className="text-center">
        <textarea
          title="user_input"
          placeholder=""
          className="w-3/4 resize-none items-center rounded-lg  border-2 bg-transparent pt-6 text-center text-xl  font-medium text-white"
        ></textarea>{" "}
      </div>
    </div>
  );
};
