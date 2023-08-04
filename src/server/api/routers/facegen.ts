import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import getFace from "~/server/face";

function parseDOMDocument(value: unknown): Document {
  if (value instanceof Document) {
    return value;
  }
  throw new Error("invalid input");
}

export const FaceGenRoute = createTRPCRouter({
  generateFace: publicProcedure.query(({}) => {
    // fix later?
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const data = getFace();
    return data;
  }),
});
