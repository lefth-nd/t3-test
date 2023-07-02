// Import the required modules
import { env } from "~/env.mjs";
import { google } from "googleapis";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// Load the client library and initialize the API
export const Youtube = createTRPCRouter({
  comment: publicProcedure.query(async () => {
    const randomId = "Gsg1Xjd9Xx0";
    const apiKey = env.YOUTUBE_API_KEY;

    const youtube = google.youtube({
      version: "v3",
      auth: apiKey, // Pass the API key here
    });

    const response = await youtube.commentThreads.list({
      part: ["snippet"],
      maxResults: 1,
      videoId: randomId,
    });
    console.log(response.data);
    return response.data;
  }),
});

//.data?.items[0]?.snippet?.topLevelComment?.snippet?.textDisplay;
