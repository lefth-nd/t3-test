import React, { useState } from "react";
import { api } from "~/utils/api";

// TODO: need different way of getting random video id

const GetVID = (id: number) => {
  const { data } = api.youtube.video.useQuery();
  const [video_index_state, setVideoIndex] = useState(id);

  const incrementVideoIndex = () => {
    setVideoIndex(video_index_state + 1);
  };

  if (data?.items !== undefined) {
    const v_id = data.items[video_index_state]?.id as string;
    const snippet = data.items[video_index_state]?.snippet;
    console.log(video_index_state);
    const title = snippet?.title as string;
    return [v_id, title, incrementVideoIndex];
  } else {
    return [];
  }
};

function getComment(video_id: string) {
  const { data } = api.youtube.comment.useQuery({ id: video_id });
  const comments = [] as string[];
  if (data?.items !== undefined) {
    data?.items.forEach((item) => {
      const comment = item?.snippet?.topLevelComment?.snippet
        ?.textDisplay as string;
      comments.push(comment);
    });
  }
  return [comments];
}

export const Game = () => {
  const button =
    "hidden rounded-full bg-white px-10 ml-4 py-3 font-semibold text-gray-800 no-underline transition hover:bg-red-900 hover:text-white ";
  const heading =
    "hidden text-2xl font-extrabold tracking-tight text-white sm:text-[2rem]";
  const videoData = GetVID(0);
  const video_id = videoData[0] as string;
  const answer = videoData[1] as string;
  const incrementVideoIndex = videoData[2] as () => void;

  const commentDetails = getComment(video_id);
  const comment = commentDetails[0] as string[];

  const [title, setHeadingVisible] = useState(heading);
  const [button_state, setButtonVisible] = useState(button);

  let textarea: HTMLTextAreaElement | null = null;
  if (typeof window !== "undefined") {
    textarea = document.getElementById("answer-title") as HTMLTextAreaElement;
  }
  const [text_value, setTextValue] = useState(" ");

  const handleClick = () => {
    setTextValue(" ");
    setHeadingVisible(heading);
    setButtonVisible(button);
    incrementVideoIndex();
  };

  textarea?.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      const visible_heading = heading.substring(6);
      const visible_button = button.substring(6);
      setHeadingVisible(visible_heading);
      setButtonVisible(visible_button);
    }
  });

  return (
    <div className="w-3/4 text-center">
      {comment.map((index) => (
        <div
          key={index}
          className="h-32items-center mb-6 flex rounded-3xl bg-slate-200 p-8 align-middle font-bold shadow-lg shadow-zinc-950"
        >
          {index}
        </div>
      ))}
      <div className="text-center">
        <h1 className={title}>{answer}</h1>
        <div className="pb-6"></div>
        <div className="flex flex-row  justify-center gap-10">
          <textarea
            id="answer-title"
            title="user_input"
            placeholder=""
            className="relative w-3/6 resize-none items-center rounded-lg border-2 bg-transparent  pt-6 text-center text-xl font-medium text-white"
          >
            {text_value}
          </textarea>
          <button type="submit" className={button_state} onClick={handleClick}>
            New Game
          </button>
        </div>
      </div>
    </div>
  );
};
