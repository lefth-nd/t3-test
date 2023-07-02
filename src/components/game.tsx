import React from "react";
import { api } from "~/utils/api";

function getComment()  {
  const { data } = api.youtube.comment.useQuery();
  const comments = [] as string[];
  if (data?.items !== undefined) {
    data?.items.forEach((item) => {
      const comment = item?.snippet?.topLevelComment?.snippet
      ?.textDisplay as string;
      comments.push(comment)
    })
  }
  return comments;
}

export const Game = () => {
  const btn =
    "rounded-full bg-white px-10 py-3 font-semibold text-gray-800 no-underline transition hover:bg-red-900 hover:text-white";
    const comment = getComment();
  return (
    <div className="w-3/4 text-center">
      {comment.map((index) =>(
      <div className="mb-6 h-32items-center flex rounded-3xl bg-slate-200 p-8 align-middle font-bold shadow-lg shadow-zinc-950">
        {index}
      </div>
      ))}
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
