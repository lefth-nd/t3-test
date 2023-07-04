// Import the required modules
import { z } from "zod";
import { env } from "~/env.mjs";
import { google } from "googleapis";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// Load the client library and initialize the API
export const Youtube = createTRPCRouter({
  comment: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      console.log(input.id);
      const randomId = input.id;
      const apiKey = env.YOUTUBE_API_KEY;

      const youtube = google.youtube({
        version: "v3",
        auth: apiKey, // Pass the API key here
      });

      const response = await youtube.commentThreads.list({
        part: ["snippet"],
        maxResults: 3,
        videoId: randomId,
      });
      console.log(response.data);
      return response.data;
    }),
  video: publicProcedure.query(async () => {
    const apiKey = env.YOUTUBE_API_KEY;
    const youtube = google.youtube({
      version: "v3",
      auth: apiKey,
    });

    const response = await youtube.videos.list({
      part: ["snippet"],
      chart: "mostPopular",
      maxResults: 22,
    });
    return response.data;
  }),
});

//.data?.items[0]?.snippet?.topLevelComment?.snippet?.textDisplay;
