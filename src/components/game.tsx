import React, { useEffect, useState } from "react";
import { api } from "~/utils/api";

// TODO: need different way of getting random video id

function getVID() {
  const { data } = api.youtube.video.useQuery();
  if (data?.items !== undefined) {
    const v_id = data.items[0]?.id as string;
    const snippet = data.items[0]?.snippet;
    const title = snippet?.title as string;
    return [v_id, title];
  } else {
    return [];
  }
}

function getComment() {
  const videoData = getVID();
  const video_id = videoData[0] as string;
  const title = videoData[1];
  console.log(title);
  console.log(video_id);
  const { data } = api.youtube.comment.useQuery({ id: video_id });
  const comments = [] as string[];
  if (data?.items !== undefined) {
    data?.items.forEach((item) => {
      const comment = item?.snippet?.topLevelComment?.snippet
        ?.textDisplay as string;
      comments.push(comment);
    });
  }
  return [comments, title];
}

export const Game = () => {
  const btn =
    "rounded-full bg-white px-10 py-3 font-semibold text-gray-800 no-underline transition hover:bg-red-900 hover:text-white";
  const heading =
    "hidden text-2xl font-extrabold tracking-tight text-white sm:text-[2rem]";
  const commentDetails = getComment();
  const comment = commentDetails[0] as string[];
  const answer = commentDetails[1];

  const [title, setHeadingVisible] = useState(heading);

  let textarea: HTMLTextAreaElement | null = null;

  if (typeof window !== "undefined") {
    textarea = document.getElementById("answer-title") as HTMLTextAreaElement;
  }

  textarea?.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      const visible_heading =
        "text-2xl font-extrabold tracking-tight text-white sm:text-[2rem]";
      setHeadingVisible(visible_heading);
    }
  });

  return (
    <div className="w-3/4 text-center">
      {comment.map((index) => (
        <div
          key={""}
          className="h-32items-center mb-6 flex rounded-3xl bg-slate-200 p-8 align-middle font-bold shadow-lg shadow-zinc-950"
        >
          {index}
        </div>
      ))}
      <div className="text-center">
        <h1 className={title}>{answer}</h1>
        <div className="pb-6"></div>
        <textarea
          id="answer-title"
          title="user_input"
          placeholder=""
          className="w-3/4 resize-none items-center rounded-lg  border-2 bg-transparent pt-6 text-center text-xl  font-medium text-white"
        ></textarea>{" "}
      </div>
    </div>
  );
};
